var Hapi = require('hapi'),
    rclient = require('rserve-client'),
    rproxy;

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// RServe Client
rclient.connect('localhost', 6311, function(err, client) {
    rproxy = client;
});

// Add the route
server.route({
    method: ['GET', 'POST'],
    path: '/eval/{code}',
    handler: function(request, reply) {
        rproxy.evaluate(request.params.code, function(err, ans) {
            reply(err ? 'Invalid code, we do not get real R errors' : ans);
        });
    }
});

// Start the Webserver
server.start(function() {
    console.log('Server listening on http://localhost:8000')
});
