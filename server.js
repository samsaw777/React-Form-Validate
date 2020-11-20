const express = require('express');


const app = express();
const mongoose  = require('mongoose');
const bodyparser = require('body-parser');
const feedroute = require('./Routes/routes');
// app.use('/posts',()=>{
//     console.log("This is a middleware running");
// });
app.use(bodyparser.json());
app.use('/', feedroute);


mongoose.connect('mongodb://localhost:27017',
{useNewUrlParser: true, useUnifiedTopology: true},
()=>{
    console.log('Connected to database');
});
app.listen(3000);