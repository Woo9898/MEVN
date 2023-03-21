const express = require('express');
const app = express();
const logger = require('morgan');
const port = 3000;

app.use(logger('tiny'));

const simple_module = require('./simple_module.js');

app.get('/', simple_module.intro)
app.get('/users/:userName/books/:booName', simple_module.handleBook);

app.listen(port, ()=>{
    console.log(`active server at port: ${port}`);
})