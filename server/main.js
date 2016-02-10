var server = require('./server.js');

// The database instance is created when this file is required
// var db = require('./config/db');

var PORT = process.env.PORT || 3000; // set our port

// Initialize the server
server.listen(PORT, function() {
  console.log('Server listening on port', PORT);
});