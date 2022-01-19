const root = require('express').Router({ mergeParams: true });

root.use('/', require('./pages/router'));
root.use('/messages', require('./messages/router'));

module.exports = root;
