const express = require('express');
const {mainPageView } = require('../controllers/mainController');

const router = express.Router();


router.get('/', mainPageView);  
// router.get('/home', homeView);

module.exports = router;
