// TODO: Require Controllers...
const express = require('express');
const Router = express.Router;

// const cubeController  = require('./controllers/cubeController')
const homeController = require('../controllers/homeController')

const router = Router()

module.exports = router
    // TODO...
app.get("/", homeController.getHomeView);
