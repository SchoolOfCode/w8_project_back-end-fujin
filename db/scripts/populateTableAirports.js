const pool = require("../index");
const airports = require("../../data/airport.json");

async function populateTable() {
  const sqlQuery =
    "INSERT INTO airports (airport_code, airport_name, city_code, city_name, state_code, country_code, active) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;";

  for (airport of airports) {
    const res = await pool.query(sqlQuery, [
      airport["PORT_IATA"],
      airport["PORT_NAME"],
      airport["CITY_CODE"],
      airport["CITY_NAME"],
      airport["STATE_CODE"],
      airport["COUNTRY_CODE"],
      airport["ACTIVE"],
    ]);
    console.log(res.rows);
  }
  console.log("Airports table populated");
}

populateTable();
