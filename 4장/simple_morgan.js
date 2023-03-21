const express = require('express');
const app = express();
const logger = require('morgan');

const port = 3000;

//1번로직
app.use(logger('tiny'));
app.use((req, res, next) =>{
    console.log('1 Time:', Date.now());
    next();
})

app.use((req, res, next) =>{
    console.log('1 Time:', Date.now());
    next();
})

//2번 로직

app.listen(port, () =>{
    console.log(`서버 생성 완료 ${port}`)
})