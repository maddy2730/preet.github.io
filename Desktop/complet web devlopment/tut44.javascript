<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALERT . CONFIRM, PROMPT</title>
</head>
<body>
<div class="css"> 

  <div class="item">
    this is about of loops
  </div>

</div>

</body>
<script>
 
let i=0;
let friends = ["akash","preet" , "vishal" ,"khusii" , "vansh"];

/*for( i=0;i<3;i++){ 
console.log(i);
  for (let index = 0; index < friends.length; index++) {
    console.log("hello my friend "+ friends[index]);
    
  }
}
friends.forEach(function f(element){
  console.log("hello my friend " + element + " welcome to coding world")
});
for ( element of friends){
  console.log( "hello my friend " + element + 'welcome to my coding world')
}
*/
let employ = { 
  name: "akash",
  salary: 32,
  chanel: "preet",                                                                                                    
   sirname:"sharma",                                                                                                                                                      
  
}
for(key in employ){ 
console.log(`The ${key} of employee is ${ employ[key]}`);
i++;
}
i=0; 
while( i<5){ 
  console.log(`${i}is less than 5`);
  i++
}


</script>
</html>