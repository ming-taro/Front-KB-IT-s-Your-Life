const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.css': 'text/css',
    '.js': 'application/javascript'
};

const server = http.createServer((req, res) => {
    const { method, url } = req;

    res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>Not Found!</h1>');

    if (url === "/" || url === "/home") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/home.html", "utf-8");
        readStream.pipe(res);
    } else if (url === "/login") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/login.html", "utf-8");
        readStream.pipe(res);
    }  else if (url === "/company-info") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/company-info.html", "utf-8");
        readStream.pipe(res);
    }  else if (url === "/company-location") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/company-location.html", "utf-8");
        readStream.pipe(res);
    }
})

server.listen(port, () => {
    console.log(`${port}번으로 서버 실행중`)
});