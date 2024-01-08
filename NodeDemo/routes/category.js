const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController.js');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);

module.exports = router;
