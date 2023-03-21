const http = require('http')

const port = 12010

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'application/json', 'text/plain; charset=utf-8')
    const obj = {
        이름: "큰돌"
    }
    res.end(JSON.stringify(obj))
})

setTimeout(() => {
    //에러 발생시켜서 3초마다 서버가 중지되게 만든다.
    JSON.parse("{Z")
}, 3000);

server.listen(port, () =>{
    console.log('서버실행')
})