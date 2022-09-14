const express = require('express');
const router = express.Router();
const computerController = require('../controllers/computerController.js');

router.get('/', computerController.getComputerParts, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/', computerController.addComputerParts, (req, res) => {
  res.status(200).json(res.locals.parts)
});


module.exports = router;
