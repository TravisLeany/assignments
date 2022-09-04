// <!DOCTYPE html>
// <html>
//     <head>
//         <title>challenge 1.0</title>
//     </head>
//     <body>
//         <input type="text" id="inputBox" size="30"/>
//         <button type="text" onclick="logValue()">Log input value</button>
//         <h1 id="varyingHeader"></h1>

//         <div id = djSquare style="width: 250px; height:250px; background-color:black;">

//         </div>
        
//         <script src="index.js"></script>
//     </body>
// </html>

document.getElementById("myID").addEventListener("mouseover", function() {
    document.getElementById("myID").style.backgroundColor = "blue";
});
    
document.getElementById("myID").addEventListener("mouseout", function() {
    document.getElementById("myID").style.backgroundColor = "black";
});

document.getElementById("myID").addEventListener("mousedown", function(){
    document.getElementById("myID").style.backgroundColor = "red";
})

document.getElementById("myID").addEventListener("mouseup", function (){
    document.getElementById("myID").style.backgroundColor = "yellow";
})

document.getElementById("myID").addEventListener("dblclick", function (){
    document.getElementById("myID").style.backgroundColor = "green";
})

document.getElementById("myID").addEventListener("wheel", function (){
    document.getElementById("myID").style.backgroundColor = "orange";
})