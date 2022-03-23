const casesService = require('../services/casesService');

const getAll = async (req, res) => {
  const cases = await casesService.getAll();
  res.status(200).json('cheguei')
};

module.exports = {
  getAll,
};
