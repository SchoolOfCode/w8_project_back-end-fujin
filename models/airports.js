const pool = require('../db');

async function getAllAirports() {
  const response = await pool.query('SELECT * FROM airports;');
  return response.rows;
}

async function getAirportsByCity(city) {
  const sqlQuery = 'SELECT * FROM airports WHERE city_name ILIKE $1;';

  const response = await pool.query(sqlQuery, [`%${city}%`]);
  return response.rows;
}

async function getAirportById(id) {
  const sqlQuery = 'SELECT * FROM airports WHERE airport_code = $1';

  const response = await pool.query(sqlQuery, [id]);
  return response.rows[0];
}

module.exports = { getAllAirports, getAirportsByCity, getAirportById };
