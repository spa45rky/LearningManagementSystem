const express = require('express')
const router = express.Router()


// Admin Dashboard
router.get('/', () => {

})

// Add Class
router.post('/addclass', () => {

})

// View Classes
router.get('/classes', () => {

})

// Update Class
router.put('/class/:id', () => {

})

// Delete Class
router.delete('/class/:id', () => {

})

// Add Teacher
router.post('/addteacher', () => {

})

// Assign Teacher
router.put('/assignteacher/:id', () => {

})

// Delete Teacher
router.delete('/teacher/:id', () => {

})

// View Students
router.get('/students', () => {

})

// Add Student
router.post('/addstudent', () => {

})

// Assign Student
router.put('/assignstudent/:id', () => {

})

// Delete Student
router.delete('/student/:id', () => {

})
module.exports = adminRouter