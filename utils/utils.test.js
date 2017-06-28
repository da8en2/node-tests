const expect = require('expect');

const utils = require('./utils')

describe('Utils', () => {
  describe('Add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
      // if (res != 44) {
      //   throw new Error(`Expected 44, but got ${res}`);
      // }
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  describe('Square', () => {
    it('should square a number', () => {
      var res = utils.square(5);

      expect(res).toBe(25).toBeA('number');
      // if (res != 25) {
      //   throw new Error(`Expected 25, but got ${res}`)
      //}
    });

    it('should async square a number', (done) => {
      utils.asyncSquare(5, (squared) => {
        expect(squared).toBe(25).toBeA('number');
        done();
      })
    });
  });

});



// test to check that first and last names are set
it('first and last name should be set to a string', () => {
  var user = {location: "Phoenix", age: 35};
  var res = utils.setName(user, 'Daniel Endres');

  expect(res).toInclude({
    firstName: 'Daniel',
    lastName: 'Endres'
  });
});

// it('should pass the test, just testing different test scenarios', () => {
//   expect(12).toNotBe(13);
//   // for objects and arrays need to use toEqual or toNotEqual!!!
//   expect({name: 'dan'}).toEqual({name: 'dan'});
//   expect({name: 'dan'}).toNotEqual({name: 'Dan'});
//   //check if array or object includes something
//   expect([1,2,3]).toInclude(2);
//   expect([1,2,3]).toExclude(6);
//
//   expect({
//     name: 'Dan',
//     age: 35,
//     location: 'Phoenix'
//   }).toInclude({
//     age: 35
//   });
// });
