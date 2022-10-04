const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./home.html')
const about = fs.readFileSync('./about.html')
const page = fs.readFileSync('./page.html')
const service = fs.readFileSync('./service.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url
    res.statusCode = 200;
    res.setHeader("content-Text", "text/html");
    if (url == '/home') {
        res.end(home)
    }
    else if (url == '/about') {
        res.end(about)
    }
    else if (url == '/page') {
        res.end(page)
    }
    else if (url == '/service') {
        res.end(service)
    }
});

server.listen(port, hostname, () => {
    console.log(`content is run on this server http:// ${hostname}: ${port}/`);
});