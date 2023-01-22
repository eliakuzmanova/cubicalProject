const { urlencoded } = require('express');
const express = require('express');
const handlebars = require('express-handlebars');


module.exports = (app) => {
    const router = require('./routes')(app);
    app.engine("hbs", handlebars.engine({
        extname: ".hbs"
    }));
   
    app.set('view engine', "hbs");

    app.use(express.static("public"));
    app.use(urlencoded({extended: false}))
    app.use(router)
};