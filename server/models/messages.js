var db = require('../db');

module.exports = {
  getAll: function () {
    db.query(
      'SELECT * FROM `messages`',
      function(err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      }
    );
  }, // a function which produces all the messages
  create: function () {
    db.query(
      'INSERT INTO messages (text) VALUES (\'We think this will work?\')',
      function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Successfully stored message!');
        }
      }
    );
  } // a function which can be used to insert a message into the database
};
