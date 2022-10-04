<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>table and list</title>
    <style>
        #btn{

            padding: 10px;
            background-color: rgb(98, 225, 185);
            height: 40px;
            cursor: pointer;

        }
    </style>
</head>

<body>
    <div id="contaner">
        <h2>This is a heading</h2>
        <p id ="para">Lorem,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam repellendus quis cumque quibusdam modi error? Sequi assumenda voluptatem fugiat fuga numquam iure molestiae eum asperiores, eius, veritatis animi aliquam veniam eligendi delectus illo omnis magni excepturi laboriosam facere natus unde ducimus? Maxime dolores vel nemo dicta. Assumenda perspiciatis, aliquid maxime at accusamus ducimus eius recusandae, consequatur, iusto voluptatibus veritatis pariatur. Magnam omnis, voluptatum ullam, corrupti impedit hic iste explicabo cumque soluta minus sint quia distinctio excepturi repellat quod natus voluptatibus quaerat, incidunt amet laboriosam ipsa laudantium accusamus eveniet. Quo soluta aut nesciunt? Laudantium rerum impedit excepturi dicta. Tenetur, neque omnis. ipsum dolor sit amet consectetur adipisicing elit. Id voluptate pariatur accusantium. Beatae ea odio eum nesciunt pariatur consectetur? Inventore, tenetur adipisci. Mollitia, cumque autem architecto corrupti officiis eligendi, deserunt, obcaecati voluptate tempore eveniet rem! Officiis perspiciatis reprehenderit rem ab minima temporibus totam voluptates reiciendis adipisci, expedita enim unde non.</p>
    </div>
    <button id ="btn" onclick="toggleHide()"> Show/Hide</button>

</body>
<script>
    let para = document.getElementById(`para`)
    para.addEventListener("mouseover" ,function run(){
alert( `mouse inside`)
 
    } );
    para.addEventListener("mouseout" ,function run(){
alert( `mouse outside`)
    });

    function toggleHide(){
        let btn = document.getElementById(`btn`);
        let para = document.getElementById(`para`);
        if( para.style.display != `none` ){
            
            para.style.display = `none`;
        }
else{ 
    para.style.display = `block`;
}
       }

</script>
</html>