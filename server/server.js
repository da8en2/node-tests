const express = require('express');

var app = express();

app.get('/', (req, res ) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Some App v1.0'
  });
});

// GET /user
// give users a name and age property
app.get('/users', (req, res) => {
  res.send([{
    name: 'Dan',
    age: 35
  }, {
    name: 'Bob',
    age: 99
  }, {
    name: 'Jim',
    age: 33
  }]);
});

app.listen(3000);

module.exports.app = app;
