const types = require('./types');

const newMessage = (payload) => ({
  type: types.NEW_MESSAGE,
  payload,
});

const changeNickname = (payload) => ({
  type: types.CHANGE_NICKNAME,
  payload,
});

module.exports = {
  types,
  newMessage,
  changeNickname,
};
