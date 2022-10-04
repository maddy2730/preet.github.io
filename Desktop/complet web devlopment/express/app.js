const express =require("express")
const path = require('path')
const fs = require('fs')

const app = express();
const port = 80;

app.use("/static",express.static ('static'));

app.use(express.urlencoded())

app.set( 'view engine','pug')

app.set( 'views', path.join(__dirname, 'views'))

  app.get('/', (req,res)=> { 
    const con = "this is fastegr webpage of a whole internet"
    const params = { 'title': 'this is preet file', 'content': con}
res.status(200).render('index.pug', params)
})

app.post("/", (req,res)=>{ 
  name = req.body.name
  age = req.body.age
  contract = req.body.contract
  address = req.body.address
  location = req.body.location
  more = req.body.more

  let outputToWrite = `client name is ${name}, ${age}year ago , ${contract}call me this number, ${address}, ${location} ,${more}`
fs.writeFileSync('output.text',outputToWrite)

  const params ={ 'message': 'your form will be submit successfully'}
  res.status(200).render('index.pug',params);
})



app.listen(port, ()=>{
console.log(`the application startes successfully on port ${port}`)
});


