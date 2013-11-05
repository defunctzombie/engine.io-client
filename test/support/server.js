var engine = require('engine.io');
var server = engine.listen(process.env.ZUUL_PORT)

server.on('connection', function (socket) {
    socket.send('hi');
});
