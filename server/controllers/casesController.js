const casesService = require('../services/casesService');

const getAll = async (req, res) => {
  const cases = await casesService.getAll();
  res.status(200).json({ message: cases });
};

module.exports = {
  getAll,
};
