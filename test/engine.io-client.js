var eio = require('../');
var expect = require('expect.js');

describe('engine.io-client', function () {

  it('should expose protocol number', function () {
    expect(eio.protocol).to.be.a('number');
  });

});
