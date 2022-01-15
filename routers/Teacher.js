const express = require("express");
const teacherRouter = express.Router();

/////////////////////////// ROUTES //////////////////////////////////
// GET ROUTES
teacherRouter.get('/materials', (req, res, next) => {

});

teacherRouter.get('/assign/:id', (req, res, next) => {

});

teacherRouter.get('/viewattasign', (req, res, next) => {

});

// TEACHER DASHBOARD
teacherRouter.get('/', (req, res, next) => {

});

teacherRouter.get('/viewattquiz', (req, res, next) => {

});

teacherRouter.get('/quiz/:id', (req, res, next) => {

});

// POST ROUTES
teacherRouter.post('/addmat', (req, res, next) => {

});

teacherRouter.post('/addassign', (req, res, next) => {

});

teacherRouter.post('/addquiz', (req, res, next) => {

});

teacherRouter.post('/addmarks', (req, res, next) => {

});

// PUT ROUTES
teacherRouter.put('/marks/:id', (req, res, next) => {

});


teacherRouter.put('/marks/:id', (req, res, next) => {

});


// DELETE ROUTES
teacherRouter.delete('/marks/:id', (req, res, next) => {

});

teacherRouter.delete('/assignment/:id', (req, res, next) => {

});

teacherRouter.delete('/material/:id', (req, res, next) => {

});

teacherRouter.delete('/quiz/:id', (req, res, next) => {

});

teacherRouter.delete('/marks/:id', (req, res, next) => {

});


module.exports = teacherRouter;