const datesService = require('../services/datesService');

const getAll = async (req, res) => {
  const dates = await datesService.getAll();
  res.status(200).json(dates);
};

module.exports = {
  getAll,
};
