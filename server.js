const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// server production assets like css, images, js
app.use(express.static('client/build'));

// if route is not recognized server index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// create server instance
const server = http.createServer(app)

require('./lib/sockets')(server)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on ${PORT}`));