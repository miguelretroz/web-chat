const { types } = require('../actions');
const { generateRandomString } = require('../../helpers');

const INITIAL_STATE = {
  nickname: generateRandomString(16),
};

module.exports = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_NICKNAME:
      return {
        ...state,
        nickname: action.payload,
      };
    default:
      return state;
  }
};
