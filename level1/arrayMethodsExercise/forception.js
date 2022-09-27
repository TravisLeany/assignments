var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


var nameColonAlpha = []
var namePlusColon = []
function forception(people, alphabet){

console.log(people.length)
    // for(i=0;i<people.length;i++){
    //     namePlusColon.push(`${people[i]}:`)
    for (let person of people) {
        namePlusColon.push(`${person}:`)
    
        // var alphaArray = [];
        for ( i = 0; i<alphabet.length; i++){
            namePlusColon.push(alphabet[i])
        }
   }
    // nameColonAlpha.push(alphaArray);
    // alphaArray = []
    // }
}

forception(people, alphabet)
console.log(namePlusColon.join(""))
