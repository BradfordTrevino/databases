var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('HELLO?');
    res.send('hello world');
  },
  post: function (req, res) {}
};
