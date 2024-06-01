const http = require('http');
const main = require('./index.js');
const home = require('./home.js');
const contact = require('./contact.js');

// http 라우팅 main
const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/') {
        main(req, res);
    } else if (url === '/home') {
        home(req, res);
    } else if (url === '/contact') {
        contact(req, res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Not Found!</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});