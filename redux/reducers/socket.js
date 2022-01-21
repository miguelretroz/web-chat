const { types } = require('../actions');

const INITIAL_STATE = {};

module.exports = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_SOCKET_CONNECTION:
      return action.payload;
    default:
      return state;
  }
};
