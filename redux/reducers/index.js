const { combineReducers } = require('redux');
const socket = require('./socket');
const messages = require('./messages');
const user = require('./user');
const users = require('./users');

const rootReducer = combineReducers({
  socket,
  messages,
  user,
  users,
});

module.exports = rootReducer;
