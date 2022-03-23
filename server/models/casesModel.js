const pool = require('./connection');

const getAll = async () => {
  pool.query('SELECT * FROM covid_daily_cases LIMIT 5', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
}
)};

module.exports = {
  getAll,
};
