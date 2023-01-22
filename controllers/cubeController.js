exports.getCubeView = (req, res) => {
    res.render("create")
}

exports.postCube = (req, res) => {
    console.log(req.body);
    res.send("Form submission")
}