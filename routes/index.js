// routes/index.js
const thoughtsRoutes = require('./thoughts');
const usersRoutes = require('./users');

module.exports = {
  thoughts: thoughtsRoutes,
  users: usersRoutes,
};
