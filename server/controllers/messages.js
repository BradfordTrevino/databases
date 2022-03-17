var models = require('../models');
// var express = require('express');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        console.error('Unable to retrieve messages from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req);
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, function(err, results) {
      if (err) {
        console.error('Unable to post messages from the database: ', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  } // a function which handles posting a message to the database
};
