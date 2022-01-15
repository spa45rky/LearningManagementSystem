const express = require("express");
const userRouter = express.Router();

/////////////////////////// ROUTES //////////////////////////////////
// GET ROUTES
userRouter.get('/logout', (req, res, next) => {

});

// POST ROUTES
userRouter.post('/login', (req, res, next) => {

});

// ALL ROUTES
userRouter.all('/validate', (req, res, next) => {

});




module.exports = userRouter;