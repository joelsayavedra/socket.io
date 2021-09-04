const express = require('express');
const app = express();
const server = require('http').createServer(app);

//socket io
const { Server } = require("socket.io");
const io = new Server(server);
const socketEvents=require("./Controllers/sockets.js")(io);

//requires varios
const path = require('path');

//config de express
app.use(express.static(path.join(__dirname, '../public')));

const indexRouter = require('./Routers/index');

app.get('/', indexRouter);

server.listen(3000, () => {
  console.log('listening on *:3000');
});
