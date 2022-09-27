let fizzBuzzCount = []
let fizzCount = []
let buzzCount = []

function fizzBuzz(){
    let fizzBuzzCount = []
    let fizzCount = []
    let buzzCount = []
    let arrayDump = []
    for( let i=1 ; i < 101 ; i++ ){
        if (i % 3 === 0 && i % 5 === 0){
            arrayDump.push('fizzbuzz')
            fizzBuzzCount.push(i)
        } else if (i % 3 === 0){
            arrayDump.push('fizz')
            fizzCount.push(i)
        } else if (i % 5 === 0){
            arrayDump.push("buzz")
            buzzCount.push(1)
        } else {
            arrayDump.push(i)
        }
    }
    let extraDump = {
        fizzbuzz: fizzBuzzCount.length,
        fizz: fizzCount.length,
        buzz: buzzCount.length,
    }
    console.log(arrayDump.join(''))
    console.log(extraDump)
}

fizzBuzz()