//# triangle 
for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}

// # chessboard
let board = "";
let size = 8;
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((y + x) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);


//fizzbuzz
for (let i = 1; i = 101; i++) {
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