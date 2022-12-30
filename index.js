const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');


dotenv.config();

  

app.set('view engine', 'ejs');
//Routes
app.use('/', require('./routes/home'));
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 4111;


app.listen(PORT);
console.log("Server start on port " + PORT);

