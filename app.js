var express = require('express'),
    app = express(),
    router = express.Router(),
    contactsRoute = require('./routes/contacts'),
    contactController = require('./controllers/contactController'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    connection = require('./models/DAO/connectionDb');

app.use(bodyParser.json());     // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
})); 
app.use(expressValidator());
app.use(connection());

/*
  (app.route / router)
  app.route('/lain').get((req, res) => {res.end("pain");});
*/

contactsRoute(router, contactController);

app.use('/api', router);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' Not Found :('})
});

app.listen(3000);
