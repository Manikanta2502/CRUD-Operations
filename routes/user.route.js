const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {login,register,user_data} = require("../controllers/users.controller");

const validateItem = [
    // check('name').not().isEmpty()
    //     .withMessage("Name is Required")
    //     .isLength({min: 6})
    //     .withMessage("Name must be three letters atleast"),
    check('email')
        .not().isEmpty().withMessage("The email should not be empty")
        .isLength({min: 6}).withMessage("The price should me a number"),
    check('password')
        .not().isEmpty()
        .isLength({min: 6})
        .withMessage("password must be a 6")
];



router.get("/",user_data)

router.post('/register',validateItem,register);

router.post("/login",validateItem,login);

module.exports = router;