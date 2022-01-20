const { types } = require('../actions');

const INITIAL_STATE = [];

module.exports = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NEW_MESSAGE:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};
