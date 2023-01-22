const Cube = require("../models/Cube");
const database = require("../config/database");

exports.getCubeView = (req, res) => {
    res.render("create")
}

exports.postCube = (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    const cube = new Cube(name, description, imageUrl, difficultyLevel);
    cube.saveCube();
    res.redirect("/");
}

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if(!cubeId) {
        return res.redirect("/404")
    }

    let cube = database.cubes.find(x => x.id == cubeId);

    if(!cube) {	
        return res.redirect("/404")
    }

    res.render("details", {cube})
}