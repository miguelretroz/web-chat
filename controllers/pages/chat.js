const rescue = require('express-rescue');

module.exports = (handler) => rescue((req, res) => handler(req, res));
