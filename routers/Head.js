const express = require("express");
const headRouter = express.Router();
const db = require('../db')

/////////////////////////// ROUTES //////////////////////////////////
// GET ROUTES
// HEAD DASHBOARD
headRouter.get('/', (req, res, next) => {
    db.collection('user')
});

headRouter.get('/class', (req, res, next) => {

});

headRouter.get('/results/class/:id', (req, res, next) => {

});

headRouter.get('/results/student/:id', (req, res, next) => {

});

headRouter.get('/materials', (req, res, next) => {

});

headRouter.get('/graph', (req, res, next) => {

});



module.exports = headRouter;