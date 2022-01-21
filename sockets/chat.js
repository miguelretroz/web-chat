const moment = require('moment');
const { MessagesModel } = require('../models');

const connectedUsers = {};

const disconnectEvent = (io, socket) => () => {
  delete connectedUsers[socket.id];

  io.emit('updateConnectedUsers', connectedUsers);

  console.log(`Usuário ${socket.id} se desconectou!`);
};

module.exports = (io) => io.on('connection', (socket) => {
    console.log(`Usuário ${socket.id} se conectou!`);

    connectedUsers[socket.id] = {
      id: socket.id,
      nickname: socket.id,
    };

    io.emit('updateConnectedUsers', connectedUsers);

    socket.on('message', ({ chatMessage, nickname }) => {
      io.emit('message', `${moment().format('DD-MM-yyyy HH:mm:ss')} ${nickname} ${chatMessage}`);

      MessagesModel.create({ message: chatMessage, nickname });// Com async/await não passa no teste!
    });

    socket.on('setNickname', (newNickname) => {
      connectedUsers[socket.id].nickname = newNickname;

      io.emit('updateConnectedUsers', connectedUsers);
    });

    socket.on('getConnectedUsers', () => {
      socket.emit('updateConnectedUsers', connectedUsers);
    });

    socket.on('disconnect', disconnectEvent(io, socket));
});