const connection = require('./connection');

const getAll = async () => {
  const result = await connection.execute('SELECT * FROM covid_daily_cases LIMIT 5');
  return result;
};

module.exports = {
  getAll,
};
