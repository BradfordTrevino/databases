var models = require('../models');
// var express = require('express');

module.exports = {
  get: function (req, res) {
    console.log(models.messages.getAll());
    res.send('hello world');
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req);
    res.send('Successful post at controllers/messages!');
  } // a function which handles posting a message to the database
};
