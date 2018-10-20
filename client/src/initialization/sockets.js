import io from 'socket.io-client'

let socket

if (window.location.hostname !== 'localhost') {
  socket = io(window.location.href, {transports: ['websocket'], upgrade: false});
} else {
  socket = io('http://localhost:5000', {transports: ['websocket'], upgrade: false});
}

export default socket