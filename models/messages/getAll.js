const connection = require('../connection');

module.exports = async () => {
  const db = await connection();

  const messages = await db.collection('messages').find().toArray();

  return messages;
};
