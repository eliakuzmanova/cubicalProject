const Cube = require("../models/Cube");

exports.getCubeView = (req, res) => {
    res.render("create")
}

exports.postCube = (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body
    const cube = new Cube(name, description, imageUrl, difficultyLevel);
    cube.saveCube();
    res.redirect("/")
    
}