const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const cubeController  = require('./controllers/cubeController')
const homeController = require('./controllers/homeController')
const router = require("./config/routes")

const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);



app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));