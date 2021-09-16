const pool = require("../db");

async function getAllAirlines() {
  const response = await pool.query("SELECT * FROM airlines;");
  return response.rows;
}

async function getAirlineById(id) {
  const sqlQuery = "SELECT * FROM airlines WHERE airline_code = $1";

  const response = await pool.query(sqlQuery, [id]);
  return response.rows[0];
}

async function deleteAirline(id) {
  const data = await query("DELETE FROM airlines WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return data.rows;
}

async function postAirline({ airline_code, airline, country, state, budget_airline }) {
  const data = await query(
    "INSERT INTO airlines (airline_code, airline, country, state, budget_airline) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
    [airline_code, airline, country, state, budget_airline]
  );
  return data.rows;
}

async function updateAirline(
  id,
  { airline_code, airline, country, state, budget_airline }
) {
  const data = await query(
    "UPDATE airlines SET id = $1 airline_code = $2, airline = $3, country = $4, state = $5, budget_airline = $6 RETURNING *;",
    [airline_code, airline, country, state, budget_airline]
  );
  return data.rows;
}

module.exports = {
  getAllAirlines,
  getAirlineById,
  deleteAirline,
  postAirline,
  updateAirline,
};
