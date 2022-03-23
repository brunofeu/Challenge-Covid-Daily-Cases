const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT DISTINCT date FROM covid_daily_cases ORDER BY date';
  const [result] = await connection.execute(query);
  return result;
};

module.exports = {
  getAll,
};
