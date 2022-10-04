<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>navigation of DOM</title>
</head>
<body>
<div  id = "main"class="css"> 
<ul id = "contaner">

  <li class="item"> home</li>
  <li class="item"> insert</li>
  <li class="item"> page</li>
  <li class="item"> about</li>
  <li class="item"> help</li>

</ul>
   
</div>
<div class="css"> another main 

</div>
</body>
<script>
 
//let main = document.getElementById("main");
//console.log(main);

let contaner = document.getElementById("contaner");
console.log(contaner);
let css = document.getElementsByClassName("css");
console.log(css);
</script>
</html>