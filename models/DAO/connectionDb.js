var mysql = require('mysql'),
    connection = require('express-myconnection'),
    dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'pass',
      port: 3306,
      database: 'test',
      debug: false //debug logger
    };

module.exports = () => {
  return connection(mysql, dbOptions, 'request');
}
