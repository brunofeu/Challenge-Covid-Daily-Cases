const casesService = require('../services/casesService');

const getAll = async (req, res) => {
  const startDate = '2020-08-17';
  const endDate = '2021-01-01';
  const cases = await casesService.getAll(startDate, endDate);
  res.status(200).json({ cases });
};

module.exports = {
  getAll,
};
