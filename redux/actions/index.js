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

const addSocketConnection = (payload) => ({
  type: types.ADD_SOCKET_CONNECTION,
  payload,
});

const updateConnectedUsers = (payload) => ({
  type: types.UPDATE_CONNECTED_USERS,
  payload,
});

module.exports = {
  types,
  newMessage,
  changeNickname,
  restoreMessages,
  addSocketConnection,
  updateConnectedUsers,
};
