const moment = require('moment');

module.exports = (io) => io.on('connection', (socket) => {
    console.log(`Usuário ${socket.id} se conectou!`);

    socket.on('message', ({ chatMessage, nickname }) => {
      io.emit('message', `${moment().format('DD-MM-yyyy HH:mm:ss')} ${nickname} ${chatMessage}`);
    });
});