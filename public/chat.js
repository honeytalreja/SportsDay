

var socket = io.connect('http://localhost:8000');
var output = document.getElementById('output');
var btn = document.getElementById('send');
var un = document.getElementById('username');
var msg = document.getElementById('message');


function clicked() {
  socket.emit('feedback',{
    message: msg.value,
    username: un.value
  });
}

socket.on('feedback', function(data) {
  output.innerHTML += '<p><strong>'+data.username+': </strong>' + data.message + '.</p>';
});
