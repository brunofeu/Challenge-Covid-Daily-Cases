const connection = require('./connection');

const getByDate = async (date) => {
  const query = 'SELECT location, date, variant, num_sequences AS total FROM covid_daily_cases WHERE date=? GROUP BY location, variant';
  const [result] = await connection.execute(query, [date]);
  return result;
};

const getCumulativeUntilDate = async (date, firstDate) => {
  const query = 'SELECT a.location, a.variant, SUM(b.num_sequences) as total '
              + 'FROM covid_daily_cases a INNER JOIN (SELECT num_sequences, variant, location FROM covid_daily_cases WHERE date <= ?) b '
              + 'ON a.location = b.location AND a.variant = b.variant WHERE date = ? GROUP BY location, variant';
  const [result] = await connection.execute(query, [date, firstDate]);
  return result;
};

module.exports = {
  getByDate,
  getCumulativeUntilDate,
};
