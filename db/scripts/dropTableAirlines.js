const pool = require('../index');

async function dropTable() {
  const res = await pool.query('DROP TABLE IF EXISTS airlines;');
  console.log('Table deleted');
}

dropTable();
