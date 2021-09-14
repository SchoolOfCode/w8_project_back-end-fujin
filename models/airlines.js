const pool = require("../db");

async function getAllAirlines() {
  const response = await pool.query("SELECT * FROM airlines;");
  return response.rows;
}

module.exports = { getAllAirlines };
