const pool = require("../db");

async function getAllAirports() {
  const response = await pool.query("SELECT * FROM airports;");
  return response.rows;
}

async function getAirportsByCity(city) {
  const sqlQuery = "SELECT * FROM airports WHERE city_name ILIKE $1;";

  const response = await pool.query(sqlQuery, [`%${city}%`]);
  return response.rows;
}

async function getAirportById(id) {
  const sqlQuery = "SELECT * FROM airports WHERE airport_code = $1";

  const response = await pool.query(sqlQuery, [id]);
  return response.rows[0];
}

async function deleteAirport(id) {
  const data = await query("DELETE FROM airports WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return data.rows;
}

async function postAirport({
  airport_code,
  airport_name,
  city_code,
  city_name,
  state_code,
  country_code,
  active
}) {
  const data = await query(
    "INSERT INTO airports (airport_code, airport_name, city_code, city_name, state_code, country_code, active) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
    [
      airport_code,
      airport_name,
      city_code,
      city_name,
      state_code,
      country_code,
      active
    ]
  );
  return data.rows;
}

async function updateAirport(
  id,
  {
    airport_code,
    airport_name,
    city_code,
    city_name,
    state_code,
    country_code,
    active
  }
) {
  const data = await query(
    "UPDATE airports SET id = $1 airport_code = $2, airport_name = $3, city_code = $4, city_name = $5, state_code = $6, country_code = $7, active = $8 RETURNING *;",
    [
      airport_code,
      airport_name,
      city_code,
      city_name,
      state_code,
      country_code,
      active
    ]
  );
  return data.rows;
}

module.exports = {
  getAllAirports,
  getAirportsByCity,
  getAirportById,
  deleteAirport,
  postAirport,
  updateAirport
};
