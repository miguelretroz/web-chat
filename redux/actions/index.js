const types = require('./types');

const newMessage = (payload) => ({
  type: types.NEW_MESSAGE,
  payload,
});

const changeNickname = (payload) => ({
  type: types.CHANGE_NICKNAME,
  payload,
});

const restoreMessages = (payload) => ({
  type: types.RESTORE_MESSAGES,
  payload,
});

module.exports = {
  types,
  newMessage,
  changeNickname,
  restoreMessages,
};
