const fs = require('fs');
const database = require("../config/database");
const path = require('path');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    saveCube() {
        this.id = database.cubes[database.cubes.length-1].id + 1
        database.cubes.push(this)
        const jsonData = JSON.stringify(database, null, 2)
        fs.writeFile(path.resolve(__dirname, "../config/database"), jsonData)
    }
}

module.exports = Cube;