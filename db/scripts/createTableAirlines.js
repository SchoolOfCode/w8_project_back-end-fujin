const pool = require('../index');

async function createTable() {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS airlines(
                                id SERIAL PRIMARY KEY,
                                airline_code TEXT,
                                airline TEXT,
                                country TEXT,
                                state TEXT,
                                budget_airline BOOLEAN);`;

  const res = await pool.query(createTableQuery);
  console.log('new table created!');
  console.table(createTableQuery);
}

createTable();
