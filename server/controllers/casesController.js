const casesService = require('../services/casesService');

const getByDate = async (req, res) => {
  const { date } = req.params;
  const cases = await casesService.getByDate(date);
  res.status(200).json(cases);
};

const getCumulativeUntilDate = async (req, res) => {
  const { date } = req.params;
  const cases = await casesService.getCumulativeUntilDate(date);
  res.status(200).json(cases);
};

module.exports = {
  getByDate,
  getCumulativeUntilDate,
};
