const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {getItems,getItem,postItem,delItem,updateItem} = require('../controllers/items.controller');

const validateItem = [
    check('name').not().isEmpty()
        .withMessage("Name is Required")
        .isLength({min: 3})
        .withMessage("Name must be three letters atleast"),
    check('price')
        .not().isEmpty().withMessage("The price should not be empty")
        .isNumeric().withMessage("The price should me a number"),
    check('origin')
        .optional()
        .isString()
        .withMessage("Origin must be a String")
];

router.get('/',getItems);

router.get('/:id',getItem);

router.post('/',validateItem,postItem);

router.delete('/:id',delItem);

router.put('/:id',validateItem,updateItem);

module.exports = router;