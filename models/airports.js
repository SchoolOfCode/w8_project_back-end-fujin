const pool = require('../db');

async function getAllAirports() {
  const response = await pool.query('SELECT * FROM airports;');
  return response.rows;
}

module.exports = { getAllAirports };
