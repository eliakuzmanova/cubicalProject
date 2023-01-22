// TODO: Require Controllers...
const express = require('express');
const Router = express.Router;

const cubeController = require('../controllers/cubeController')
const homeController = require('../controllers/homeController')

const router = Router()

module.exports = (app) => {

    router.get("/", homeController.getHomeView);
    router.get("/about", homeController.getAboutView);
    router.get("/create", cubeController.getCubeView);

    return router
};
    // TODO...

