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
    <div id ="time"> </div>
</body>
<script>
    let dt = new Date();

    console.log(dt);

     let yr= dt.getFullYear();
     console.log(yr);

 let date = dt.getDate()
 console.log(date)
  
let month = dt.getMonth()
console.log(month);

let weekname = dt.getDay();
console.log(weekname);

let hour = dt.getHours()
console.log(hour);

let second = dt.getSeconds();
console.log(second);
 let minute = dt.getMinutes();
 console.log(minute);

 let millisecond =dt.getMilliseconds()
 console.log(millisecond)

 setInterval(updateTime,1000);
 function updateTime() {
    time.innerHTML = new Date();
 }
</script>
</html>