const app = require('./app.js');
const db = require('./models');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;  

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, (error) => {
      if (error) {
        return console.error('Error starting the server: ', error);
      }
      console.log(`Server running on port ${PORT}`);
    });
    return app;
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

