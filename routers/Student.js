const express = require("express");
const studentRouter = express.Router();

/////////////////////////// ROUTES //////////////////////////////////
// GET ROUTES

// STUDENT DASHBOARD
studentRouter.get('/', (req, res, next) => {

});

studentRouter.get('/attemptquiz', (req, res, next) => {

});

studentRouter.get('/viewassignment', (req, res, next) => {

});

studentRouter.get('/material', (req, res, next) => {

});

studentRouter.get('/material/:id', (req, res, next) => {

});

studentRouter.get('/result/subid', (req, res, next) => {

});

studentRouter.get('/result', (req, res, next) => {

});

studentRouter.get('/viewattquiz', (req, res, next) => {

});

studentRouter.get('/quiz/:id', (req, res, next) => {

});

// POST ROUTES
studentRouter.post('/viewquiz', (req, res, next) => {

});

studentRouter.post('/submitassignment', (req, res, next) => {

});


module.exports = studentRouter;