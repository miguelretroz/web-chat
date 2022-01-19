require('dotenv').config();
const express = require('express');
const next = require('next');
const http = require('http');
const socketIo = require('socket.io');

const rootControllers = require('./controllers/root');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const nextHandler = app.getRequestHandler();

const sockets = require('./sockets');

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);

  const io = socketIo(httpServer, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  sockets.chat(io);

  server.use(rootControllers);

  server.all('*', (req, res) => nextHandler(req, res));

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => console.log(`listen on port ${PORT}`));
});

module.exports = {
  nextHandler,
};