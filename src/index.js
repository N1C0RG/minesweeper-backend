const app = require('./app.js');
const db = require('./models');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const userHelper = require('./userHelper.js');

dotenv.config();

const PORT = process.env.PORT || 3003;  

const server = http.createServer(app.callback());

const io = new Server(server, {
  cors: {
    origin: '*', // Corregido aquí
    methods: ['GET', 'POST']
  },
}); 

io.on("connection", (socket) => {
  console.log('User connection:', socket.id);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`)
  })

  socket.on("update_leaderBoard", (data) => {
    // userHelper().then((data) => {
    //   //var newData = JSON.stringify(data); 
    //   // io.emit('receive_leaderBoard', 'xxxxxx'); 
    //   console.log(data);
    //   //console.log(newData);
    // }); 
    io.emit('receive_leaderBoard', 'xxxxxx'); 

  }); 
}); 

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    server.listen(PORT, (error) => {
      if (error) {
        return console.error('Error starting the server: ', error);
      }
      console.log(`Server running on port ${PORT}`);
    });
    return server;
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

