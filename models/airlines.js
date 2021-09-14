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

module.exports = { getAllAirlines, getAirlineById };
