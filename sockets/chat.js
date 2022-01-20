const moment = require('moment');
const { MessagesModel } = require('../models');

module.exports = (io) => io.on('connection', (socket) => {
    console.log(`Usuário ${socket.id} se conectou!`);

    socket.on('message', async ({ chatMessage, nickname }) => {
      await MessagesModel.create({ message: chatMessage, nickname });

      io.emit('message', `${moment().format('DD-MM-yyyy HH:mm:ss')} ${nickname} ${chatMessage}`);
    });
});