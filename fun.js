// loops with Ron

// For loop with Ron

/*let hashes = 17;
for (let i = "#"; i.length <= hashes; i += "#") {
    console.log(i)
}*/

// Fizz Buzz

/*function loop() {

    for (let i = 1; i <= 101; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        console.log(i);
    }

}*/

//loop()

//fizzbuzz
for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 == 0) {
        console.log('FIZZ');
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i);
    }
}
//PRACTICE 

const exercises = {
    1: "assign 5 variables",
    2: "write a for loop that counts to 255",
    3: "write a conditional statement that turns a light on of off. (hint: use booleans)",
    4: "write a conditional that adds or subtracts money/points based on a decisions made."
}

console.log(exercises[1]);
console.log(exercises[2]);
console.log(exercises[3]);
console.log(exercises[4]);