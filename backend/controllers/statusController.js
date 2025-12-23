const { getServiceStatus } = require("../models/statusModel");

const getStatus = (req, res) => {
  const { message } = getServiceStatus();
  res.send(message);
};

module.exports = { getStatus };
