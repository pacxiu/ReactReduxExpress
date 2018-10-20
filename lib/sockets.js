const socketIO = require('socket.io');
const usersRef = require('./db');

module.exports = (server) => {
  // create socket using our server instance
  const io = socketIO(server, { wsEngine: 'ws' });

  io.on('connection', (socket) => {
    console.log(`User connected with ${socket.id}`)

    socket.on('disconnect', () => {
      console.log('User disconnected')
    })
  })
}