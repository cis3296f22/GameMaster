const sumOfTwo = require('./index');
const  { run, getResult }  = require('./slashcommands/rps')


//to run coverage, type > npm test -- --coverage
//Node.js v18.12.0
//from index.js
test('adds 1 + 2 to equal 3', () => {
  expect(sumOfTwo(1, 2)).toBe(3);
});

// from ./slashcommands/rps.js 
test('P1 = Paper, P2 = Paper || = Tie', () => {
  expect(getResult('📰', '📰')).toBe("It's a tie")
});

test('P1 = Paper, P2 = Rock || = Win', () => {
  expect(getResult('📰', '⛰️')).toBe("You won!")
});

test('P1 = Paper, P2 = Scissors || = Loss', () => {
  expect(getResult('📰', '✂️')).toBe("You lost!")
});

// from ./slashcommands/rps.js
test('P1 = Rock, P2 = Paper || = Loss', () => {
  expect(getResult('⛰️', '📰')).toBe("You lost!")
});

test('P1 = Rock, P2 = Rock || = Tie', () => {
  expect(getResult('⛰️', '⛰️')).toBe("It's a tie")
});

test('P1 = Rock, P2 = Scissors || = Win', () => {
  expect(getResult('⛰️', '✂️')).toBe("You won!")
});

// from ./slashcommands/rps.js
test('P1 = Scissors, P2 = Paper || = Tie', () => {
  expect(getResult('✂️', '📰')).toBe("You won!")
});

test('P1 = Scissors, P2 = Rock || = Loss', () => {
  expect(getResult('✂️', '⛰️')).toBe("You lost!")
});

test('P1 = Scissors, P2 = Scissors || = Tie', () => {
  expect(getResult('✂️', '✂️')).toBe("It's a tie")
});