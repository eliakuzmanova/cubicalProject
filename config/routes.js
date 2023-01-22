// TODO: Require Controllers...
const express = require('express');
const Router = express.Router;

const cubeController = require('../controllers/cubeController')
const homeController = require('../controllers/homeController')

const router = Router()

module.exports = (app) => {

    router.get("/", homeController.getHomeView);

    router.get("/details/:cubeId", cubeController.getDetails);

    router.get("/about", homeController.getAboutView);


    router.get("/create", cubeController.getCubeView);
    router.post("/create", cubeController.postCube)

    router.get("/404", homeController.getErrorPage)

    return router
};
    // TODO...

