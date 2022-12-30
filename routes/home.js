const express = require('express');
const {mainPageView, homeView } = require('../controllers/homeController');

const router = express.Router();


router.get('/', mainPageView);  
router.get('/home', homeView);

module.exports = router;
