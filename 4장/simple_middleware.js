const express = require('express');
const { construct } = require('ramda');
const app = express();
const port = 3000;

//1번 로직
app.use((res, req, next)=>{
    console.log('1 Time', Date.now());
    next();
})
//2번 로직
app.use((res, req, next)=>{
    console.log("2 Time", Date.now());
    next();
})

app.listen(port, ()=>{
    console.log(`서버가 생성되었습니다. ${port}`)
})