const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req;

    res.setHeader('Content-Type', 'text/html');

    if (url === "/json" && method === "GET") {
        res.statusCode = 200;
        let info = `{
            "cat" : "feline",
            "dog" : "canine",
            "rat" : "murine"
        }`
        res.end(info);
    } else if (url === "/html" && method === "GET") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
        readStream.pipe(res);

    } else {
        res.statusCode = 404;
        res.end('<h1>Not Found!</h1>');
    }
})

server.listen(port, () => {
    console.log(`${port}번으로 서버 실행중`)
});