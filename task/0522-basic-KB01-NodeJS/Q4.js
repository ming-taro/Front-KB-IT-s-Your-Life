const http = require('http');

// http 라우팅 main
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Node</h1>');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});