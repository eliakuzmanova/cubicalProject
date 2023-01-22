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
    let cubeId = Number(req.params.id);

    if(!cubeId) {
        return res.redirect("/404")
    }

    let cube = database.find(x => x.id === cubeId);

}