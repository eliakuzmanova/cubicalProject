const database = require("../config/database");

exports.getHomeView = (req, res) => {
 res.render("index", {cubes: database.cubes})
}

exports.getAboutView = (req, res) => {
    res.render("about")
}

exports.getErrorPage = (req, res) => {
    res.render("404")
}