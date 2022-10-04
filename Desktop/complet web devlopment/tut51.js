//console.log("hello preeeeet")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
   <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width,inital-scsle=1.0">
   <meta http-equiv="X-UA-compatible"content="ie=edge">
   <title>document</title>
   </head>
   <body>
          <h1>akash</h1>
          <h2>Akash</h2>
          <h3>akash</h3>
          <h4>Akash</h4>
          <p1>this is akash</p1>k
   </body>
   </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});