const mysql = require('mysql2/promise');
require('dotenv').config();

const { JAWSDB_URL } = process.env;

const connection = mysql.createPool(JAWSDB_URL);

module.exports = connection;
