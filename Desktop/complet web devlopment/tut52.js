const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port =3000;
const home = fs.readFileSync('./index.html')
const insert = fs.readFileSync('./insert.html')
const help = fs.readFileSync('./help.html')
const contract = fs.readFileSync('./contract.html')
const request = fs.readFileSync('./request.html')
 

const server = http.createServer((req, res)=>{
    console.log(req.url)
    url = req.url;

res.statuscode =200;
res.setHeader('content-Type','text/html');
if (url == '/'){

    
    res.end(home);
}

else if (url == '/insert'){

res.end(insert);
}

else if (url == '/help'){

res.end(help);
}

else if (url == '/contract'){

    res.end(contract);
}

else if (url == '/request'){
res.end(request);
 }
 else {  
    res.startcode = 404;
     res.end("<h1>   404 its not found </h1>");

 }
 

});
server.listen(port,hostname, ()=> {

    console.log(`server running at http://${hostname}:${port}/`);
});