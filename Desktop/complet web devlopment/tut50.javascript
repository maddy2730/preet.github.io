<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> JSON </title>
    <style>
                             
    </style>

<body>
<div> this json class </div>

    <script> 
     let jsonobj={

        name:"Akash sharma",
        friends: "preet sharma",
        salary: 23,
        food: "allu jeera",    
     }
     console.log(jsonobj);
      let myjsonobj = JSON.stringify(jsonobj);
      console.log(myjsonobj);

         myjsonobj = myjsonobj.replace(`Akash sharma`, `preet boy`);
      console.log(myjsonobj);

      newjsonobj = JSON.parse(myjsonobj)
      console.log(newjsonobj)

     </script>
    </body>
</html>