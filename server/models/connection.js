const mysql = require('mysql2/promise');
require('dotenv').config({ path: 'server/.env' });

const { JAWSDB_URL } = process.env;

const connection = mysql.createPool(JAWSDB_URL);

module.exports = connection;
