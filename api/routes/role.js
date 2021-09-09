const express = require('express');
const router = express.Router();
const {createRole,getAllRoles} = require('../controllers/roleControllers');
const {auth} = require('../controllers/authControllers')

// create a role
router.post("/", createRole)

// get all roles 
router.get("/", auth, getAllRoles)


module.exports = router