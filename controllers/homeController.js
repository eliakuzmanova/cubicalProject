const database = require("../config/database");

exports.getHomeView = (req, res) => {
    const {search, from: difficultyLevelFrom, to: difficultyLevelTo} = req.query
    let cubes = database.cubes
    
    if  (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(difficultyLevelFrom) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= difficultyLevelFrom)
    }

    if(difficultyLevelTo){
        cubes = cubes.filter(cube => cube.difficultyLevel <= difficultyLevelTo)
    }


    res.render("index", {cubes , search, difficultyLevelFrom, difficultyLevelTo})
}

exports.getAboutView = (req, res) => {
    res.render("about")
}

exports.getErrorPage = (req, res) => {
    res.render("404")
}