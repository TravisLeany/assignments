var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethodsExercise(){
    vegetables.pop();
    fruit.shift();
    var indexOrange = fruit.indexOf("orange");
    fruit.push(indexOrange);
    vegLength = vegetables.length;
    vegetables.push(vegLength);
    var food = fruit.concat(vegetables);
    food.splice(4, 2);
    food.reverse();
    var stringifyFood = food.join();
    console.log(stringifyFood)
}

arrayMethodsExercise()