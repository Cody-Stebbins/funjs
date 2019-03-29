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

for (var i = 1; i = 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
hello world
Changes


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
