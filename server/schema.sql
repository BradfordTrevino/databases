CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  username_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  rooms_id INT AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(20)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(140),
  username_id INT,
  rooms_id INT,
  FOREIGN KEY(username_id)
    REFERENCES users(username_id),
  FOREIGN KEY(rooms_id)
    REFERENCES rooms(rooms_id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

