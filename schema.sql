/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/


DROP DATABASE IF EXISTS grocery;

CREATE DATABASE grocery;

USE grocery;

CREATE TABLE items (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  item VARCHAR(100),
  quantity MEDIUMINT,
  PRIMARY KEY(id)
);
