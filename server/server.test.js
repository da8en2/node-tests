const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return 404 with Page not found message', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
});

// make a new test
// assert 200
// assert that you exits in users array
it('user dan should exist in array', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Dan',
        age: 35
      });
    })
    .end(done);
});
