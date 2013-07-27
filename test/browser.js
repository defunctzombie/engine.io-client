require('./engine.io-client');
require('./util');
require('./parser');
require('./transport');
require('./socket');

/// test above here are shared with "make test"

var eio = require('../');

describe('connect', function() {
    it('should be able to connect and receive some data', function(done) {
      var socket = eio('/');
      socket.on('open', function () {
        socket.on('message', function (data) {
          expect(data).to.be('utf 8 string');
          socket.close();
        });
        socket.on('close', function () {
          done();
        });
      });
    });
});
