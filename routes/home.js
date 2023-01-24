const express = require('express');
const {homePageView} =  require('../controllers/homeController');


const router = express.Router();


router.get('/', homePageView);


module.exports = router;