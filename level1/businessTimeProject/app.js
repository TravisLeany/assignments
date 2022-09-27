// var favFoods = ["pizza", "pasta", "ice Cream", "banana"]

// // console.log (favFoods[0])
// // console.log (favFoods[1])
// // console.log (favFoods[2])
// // console.log (favFoods[3])

// for(var i = 0; i < favFoods; i++){
//         console.log(favFoods)
// }

var vehicle = {
    color: "white",
    year: 2022,
    make: "Tesla",
    model: "Model X",
    otherModels: ["Model S", "Model Y"]

}

console.log(vehicle.otherModels[0])
console.log(vehicle.otherModels[1])





var color = "blue"

if (color === "red") {
    console.log("this is blue")
} else if (color === "blue") {
    console.log("this is red")
} else {
    console.log("This is Green")
}

function someFunction (){
    console.log("tester")
}

document.getElementById("moduleZeroButton").addEventListener("click",someFunction)


function sum (a,b){
    console.log(a + b)
}
sum(1,2)