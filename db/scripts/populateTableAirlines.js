const pool = require('../index');
const airlines = require('../../data/airline.json');

async function populateTable() {
  const sqlQuery =
    'INSERT INTO airlines (airline_code, airline, country, state, budget_airline) VALUES ($1, $2, $3, $4, $5) RETURNING *;';

  for (airline of airlines) {
    const res = await pool.query(sqlQuery, [
      airline['IATA_CD'],
      airline['CARR_NAME'],
      airline['COUNTRY'],
      airline['STATE'],
      airline['LOW_COST'],
    ]);
    console.log(res.rows);
  }
  console.log('Airlines table populated');
}

populateTable();
