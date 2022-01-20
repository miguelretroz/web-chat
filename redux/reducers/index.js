const { combineReducers } = require('redux');
const socket = require('./socket');
const messages = require('./messages');
const user = require('./user');

const rootReducer = combineReducers({
  socket,
  messages,
  user,
});

module.exports = rootReducer;
