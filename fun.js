// loops with Ron

// For loop with Ron

let hashes = 17;
for (let i = "#"; i.length <= hashes; i += "#") {
    console.log(i)
}

// Fizz Buzz

function loop() {
    for (let i = 1; i <= 101; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        }
        console.log(i);
    }

}



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
    3: "write a conditional statement that turns a light on of off. (hint: use a boolean)",
    4: "write a conditional that adds or subtracts money/points based on a decisions made. "
}

console.log(exercises[1]);
console.log(exercises[2]);
console.log(exercises[3]);
console.log(exercises[4]);

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;

for (let i = 0; i <= 255; i++) {
    console.log(i);
}


let isLightOn = false;
if (isLightOn) {
    console.log('The light is on.');
} else {
    console.log('The light is off');
}


let money = 500;
let question = "Who is Ramsey Dewey?";
let answer = "A Martial Artist";
if (answer === "A Martial Artist") {
    money += 500;
    console.log(money); //output should be 1000
} else if (answer !== "A Martial Artist") {
    money -= 250;
    console.log(money); //output should be 250
}