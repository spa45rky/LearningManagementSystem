const express = require('express');

const router = express.Router();

//Show Dashboard
router.get("/", () => {})

//View Quiz
router.post("/viewquiz", () => {})

//Attempt Quiz
router.get("/attemptquiz", () => {})

//View Assignment
router.get("/viewassignment", () => {})

//Submit Assignment
router.post("/submitassignment", () => {})

//View Material
router.get("/material", () => {})

//Download Material
router.get("/material/:id", () => {})

//View Grade
router.get("/result/:subid", () => {})

//View Marks
router.get("/result/", () => {});


module.exports = router;