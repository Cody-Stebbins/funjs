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
=======
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
>>>>>>> 7431a7a76993fc906dba5b0dc1ef03be560b1f4e

        //exercises 1
        let x = 1;
        let y = " String ";
        let z = true;
        let a = x + y + z;
        let b = "Hello world " + 69;

        console.log(a)
        // exercise 2

        for (let i = 0; i <= 255; i++) {
            console.log(i);
        }

        //exercise 3

        let lightIsOn = false;

        if (lightIsOn) {
            console.log("turn light off");
        }
        else if (!lightIsOn) {
            console.log("Turn light On");
        }

        //exercise 4
        let startingMoney = 5;
        let winFight = false;

        if (winFight) {
            startingMoney++
            console.log(startingMoney);
        }
        else if (!winFight) {
            startingMoney--
            console.log(startingMoney);
        }

