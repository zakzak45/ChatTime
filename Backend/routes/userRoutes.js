const express = require('express')
const controller = require("../controllers/AuthController")
const router = express.Router()
const User = require("../models/userModel")


router.post("/",controller.signup)



module.exports= router



