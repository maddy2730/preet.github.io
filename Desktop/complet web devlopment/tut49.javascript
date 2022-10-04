<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> date and time</title>
    <style>
#time{ 
    border: 3px solid  rgb(57, 11, 107);
    text-align: center;
    background-color: rgb(189, 122, 237);
    width: 2280px;
    height: 80px;
padding-top: 50px;
font-size: 30px;
font-family: 'Baloo Bhai 2', cursive;
}
    </style>
</head>

<body>
    <div id ="time">  this is arrow function tutorial</div>
    <script>
   // function greet(){ 
    
  //  greet= () =>{
    //    console.log(`goodmorning everyone`);
        //}
   // greet();
    setTimeout(() => {
        console.log("this is akash file")
    },8000);

   // let sum = (a, b)=>{
     //   return a+b;
   // };
 //let sum =(a,b)=> a+b;
let sum =(a, b) => a+b;
 let half = a => a/2;

 let object={
    greeting:"goodbye",
name:[" akash " ," vishal "," shanu ", " preet "],
speak(){
    this.name.forEach((classmate)=> {
console.log( this.greeting, "hiip hippp hura" + classmate);
    });
}
 }
 object.speak();
</script>
    </body>
</html>