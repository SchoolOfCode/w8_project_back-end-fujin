const pool = require("../index");

async function createTable() {
  const createTableQuery = `CREATE TABLE airports(
                                airport_code TEXT PRIMARY KEY,
                                airport_name TEXT,
                                city_code TEXT,
                                city_name TEXT,
                                state_code TEXT,
                                country_code TEXT,
                                active BOOLEAN);`;

  const res = await pool.query(createTableQuery);
  console.log("new table created!");
  console.table(createTableQuery);
}

createTable();
