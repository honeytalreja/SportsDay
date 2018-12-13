
var socket = io.connect('http://localhost:8000');
var message = document.getElementsById('message');
var username = document.getElementsById('username');
var btn = document.getElementsById('send');
var output = document.getElementsById('output');


function clicked() {
  console.log('clicked');
  socket.emit('feedback', {
    message: message.value,
    username: username.value
  });


socket.on('chat',function(data) {
  output.innerHTML += '<p><strong>' + data.username+':</strong>' + data.feedback+'</p>';
});
