var engine = require('engine.io');

var server = engine.listen(process.env.PORT);

server.on('connection', function (socket) {
    socket.send('utf 8 string');
});
