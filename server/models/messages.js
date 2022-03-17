var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // message_id, text, username_id, rooms_id
    //
    var queryString = 'SELECT messages.message_id, messages.text, messages.rooms_id, users.username \
                    FROM messages LEFT OUTER JOIN users ON (messages.username_id = users.username_id) \
                    ORDER BY messages.message_id DESC';
    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryString = 'INSERT INTO messages (text, username_id, rooms_id) \
                      VALUE (?, ?, ?)';
    db.query(queryString, params, function(err, results) {
      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};
