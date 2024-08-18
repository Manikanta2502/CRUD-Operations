const express = require('express');
const router = express.Router();
const {getItems,getItem,postItem,delItem,updateItem} = require('../controllers/items.controller');

router.get('/',getItems);

router.get('/:id',getItem);

router.post('/',postItem);

router.delete('/:id',delItem);

router.put('/:id',updateItem);

module.exports = router;