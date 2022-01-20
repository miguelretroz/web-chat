const moment = require('moment');
const connection = require('../connection');

module.exports = async ({ message, nickname }) => {
  const db = await connection();

  const newMessage = await db.collection('messages')
    .insertOne({ message, nickname, timestamp: moment().format('yyyy-MM-DD HH:mm:ss') });

  return newMessage;
};
