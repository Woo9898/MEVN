const express = require('express');
const app = express()
const logger = require('morgan');
const path = require('path');
const port = 12010;

//const _path = path.join(__dirname, './dist');
const _path2 = path.join(__dirname, './dist2');

//console.log(_path);

//app.use('/dist', express.static(_path));
app.use('/dist2', express.static(_path2));
app.use(logger('tiny'));

//커스텀 미들웨이

app.use((req, res, next) =>{
    console.log('요청이 왔습니다. 지나갑니다.');
    next();
})

app.get('/book/:bookparam', (req, res) =>{
    const {bookparam} = req.params;
    res.send(`안녕하세요 ${bookparam}을 주문하셨군요!!`);
})

app.listen(port, ()=>{
    console.log(`active server at ${port}`);
})