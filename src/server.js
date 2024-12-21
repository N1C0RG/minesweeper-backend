const http = require('http');
const koa = require('koa');
const { Server } = require('socket.io')
const cors = require('cors');
const userHelper = require('./userHelper.js');

const app = new koa();

app.use(cors());

const server = http.createServer(app); 

const port = 3002; 

const io = new Server(server, {
  cors: {
    origin: '*', // Corregido aquí
    methods: ['GET', 'POST']
  },
}); 

io.on("connection", (socket) => {
  console.log('New connection', socket.id);

  socket.on("send_message", (data) => {
    console.log('Message received', data);
    //var xd = userHelper();
    userHelper().then((data) => {
      console.log('data: ', data); 
    }); 
    //console.log('el xd: ', xd);
    socket.broadcast.emit('receive_message', data); 
  })

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`)
  })

  socket.on("update_score", (data) => {
    //console.log('Score received', data);
  }); 
}); 


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); 


