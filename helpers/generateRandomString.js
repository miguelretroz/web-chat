module.exports = (n) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let string = '';

  for (let i = 0; i < n; i += 1) {
    string += characters[Math.floor(Math.random() * characters.length)];
  }

  return string;
};
