
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const feedback = require('./routes/feedback');
var socket = require('socket.io');
const user = require('./routes/user');
const app = express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

// set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/feedback',feedback);
app.use('/user', user);
var server = app.listen(8000,()=> {
  console.log('server started on 8000 ..');
});

var io = socket(server);
io.on('connection', function(socket) {
  console.log('made connection',socket.id);
  socket.on('feedback',function(data) {
    io.sockets.emit('feedback',data);
  });
});
