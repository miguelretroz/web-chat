const socketIo = require('socket.io-client');

const BASE_URL = 'http://localhost:3000';

const INITIAL_STATE = { socket: socketIo.connect(BASE_URL) };

module.exports = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
