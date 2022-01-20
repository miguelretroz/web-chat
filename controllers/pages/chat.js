const rescue = require('express-rescue');
const { MessagesModel } = require('../../models');

module.exports = (handler) => rescue(async (req, res) => {
  const messages = await MessagesModel.getAll();
  req.messages = messages;

  return handler(req, res);
});
