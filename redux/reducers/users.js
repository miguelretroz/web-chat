const { types } = require('../actions');

const INITIAL_STATE = { connected: {} };

module.exports = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_CONNECTED_USERS:
      return {
        ...state,
        connected: action.payload,
      };
    default:
      return state;
  }
};