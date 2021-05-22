var express = require("express");
var router = express.Router();
const { check } = require('express-validator');
const {signout, signup} = require("../controllers/auth");


router.post("/signup", [
    check("name", "name should be atleast 3 characters").isLength({ min: 3}),
    check("email").isEmail().withMessage("email is not valid"),
    check("password", "password should be atleast 5 chars").isLength({ min : 5 })
],signup);
router.get("/signout", signout);

module.exports = router;