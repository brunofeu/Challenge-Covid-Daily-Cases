const connection = require('./connection');

const getAll = async (startDate, endDate) => {
  const query = 'SELECT * FROM covid_daily_cases WHERE date between ? AND ? GROUP BY location';
  const result = await connection.execute(query, [startDate, endDate]);
  return result;
};

module.exports = {
  getAll,
};
