const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync all models with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  // Start your server here
});

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
