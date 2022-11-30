const sumOfTwo = require('./index');
const  { getResult }  = require('./slashcommands/rps')
const  { getRandomCard, removeCard, getCardValue }  = require('./slashcommands/hilo')

//to run coverage, type > npm test -- --coverage
//Node.js v18.12.0

let cardDeck = ["cardDeck/AD.png", "cardDeck/AC.png", "cardDeck/AH.png", "cardDeck/AS.png", "cardDeck/2D.png", "cardDeck/2C.png", "cardDeck/2H.png",
              "cardDeck/2S.png", "cardDeck/3D.png", "cardDeck/3C.png", "cardDeck/3H.png", "cardDeck/3S.png",
              "cardDeck/4D.png", "cardDeck/4C.png", "cardDeck/4H.png", "cardDeck/4S.png", "cardDeck/5D.png", "cardDeck/5C.png", "cardDeck/5H.png",
              "cardDeck/5S.png", "cardDeck/6D.png", "cardDeck/6C.png", "cardDeck/6H.png", "cardDeck/6S.png",
              "cardDeck/7D.png", "cardDeck/7C.png", "cardDeck/7H.png", "cardDeck/7S.png", "cardDeck/8D.png", "cardDeck/8C.png", "cardDeck/8H.png",
              "cardDeck/8S.png", "cardDeck/9D.png", "cardDeck/9C.png", "cardDeck/9H.png", "cardDeck/9S.png",
              "cardDeck/10D.png", "cardDeck/10C.png", "cardDeck/10H.png",
              "cardDeck/10S.png", "cardDeck/JD.png", "cardDeck/JC.png", "cardDeck/JH.png", "cardDeck/JS.png", "cardDeck/QD.png", "cardDeck/QC.png",
              "cardDeck/QH.png", "cardDeck/QS.png",
              "cardDeck/KD.png", "cardDeck/KC.png", "cardDeck/KH.png", "cardDeck/KS.png"];

// from ./slashcommands/hili.js 
test('Testing Diamond Card Values in Deck', () => {
  expect(getCardValue("cardDeck/2D.png")).toBe(2)
  expect(getCardValue("cardDeck/3D.png")).toBe(3)
  expect(getCardValue("cardDeck/4D.png")).toBe(4)
  expect(getCardValue("cardDeck/5D.png")).toBe(5)
  expect(getCardValue("cardDeck/6D.png")).toBe(6)
  expect(getCardValue("cardDeck/7D.png")).toBe(7)
  expect(getCardValue("cardDeck/8D.png")).toBe(8)
  expect(getCardValue("cardDeck/9D.png")).toBe(9)
  expect(getCardValue("cardDeck/10D.png")).toBe(10)
  expect(getCardValue("cardDeck/JD.png")).toBe(11)
  expect(getCardValue("cardDeck/QD.png")).toBe(12)
  expect(getCardValue("cardDeck/KD.png")).toBe(13)
  expect(getCardValue("cardDeck/AD.png")).toBe(14)
});

test('Testing Spade Card Values in Deck', () => {
  expect(getCardValue("cardDeck/2S.png")).toBe(2)
  expect(getCardValue("cardDeck/3S.png")).toBe(3)
  expect(getCardValue("cardDeck/4S.png")).toBe(4)
  expect(getCardValue("cardDeck/5S.png")).toBe(5)
  expect(getCardValue("cardDeck/6S.png")).toBe(6)
  expect(getCardValue("cardDeck/7S.png")).toBe(7)
  expect(getCardValue("cardDeck/8S.png")).toBe(8)
  expect(getCardValue("cardDeck/9S.png")).toBe(9)
  expect(getCardValue("cardDeck/10S.png")).toBe(10)
  expect(getCardValue("cardDeck/JS.png")).toBe(11)
  expect(getCardValue("cardDeck/QS.png")).toBe(12)
  expect(getCardValue("cardDeck/KS.png")).toBe(13)
  expect(getCardValue("cardDeck/AS.png")).toBe(14)
});

test('Testing Club Card Values in Deck', () => {
  expect(getCardValue("cardDeck/2C.png")).toBe(2)
  expect(getCardValue("cardDeck/3C.png")).toBe(3)
  expect(getCardValue("cardDeck/4C.png")).toBe(4)
  expect(getCardValue("cardDeck/5C.png")).toBe(5)
  expect(getCardValue("cardDeck/6C.png")).toBe(6)
  expect(getCardValue("cardDeck/7C.png")).toBe(7)
  expect(getCardValue("cardDeck/8C.png")).toBe(8)
  expect(getCardValue("cardDeck/9C.png")).toBe(9)
  expect(getCardValue("cardDeck/10C.png")).toBe(10)
  expect(getCardValue("cardDeck/JC.png")).toBe(11)
  expect(getCardValue("cardDeck/QC.png")).toBe(12)
  expect(getCardValue("cardDeck/KC.png")).toBe(13)
  expect(getCardValue("cardDeck/AC.png")).toBe(14)
});

test('Testing Heart Card Values in Deck', () => {
  expect(getCardValue("cardDeck/2H.png")).toBe(2)
  expect(getCardValue("cardDeck/3H.png")).toBe(3)
  expect(getCardValue("cardDeck/4H.png")).toBe(4)
  expect(getCardValue("cardDeck/5H.png")).toBe(5)
  expect(getCardValue("cardDeck/6H.png")).toBe(6)
  expect(getCardValue("cardDeck/7H.png")).toBe(7)
  expect(getCardValue("cardDeck/8H.png")).toBe(8)
  expect(getCardValue("cardDeck/9H.png")).toBe(9)
  expect(getCardValue("cardDeck/10H.png")).toBe(10)
  expect(getCardValue("cardDeck/JH.png")).toBe(11)
  expect(getCardValue("cardDeck/QH.png")).toBe(12)
  expect(getCardValue("cardDeck/KH.png")).toBe(13)
  expect(getCardValue("cardDeck/AH.png")).toBe(14)
});

test('Remove Card from Deck', () => {
  let cardSDeckIndex0 = cardDeck[0]
  let cardSDeckIndex1 = cardDeck[1]
  let cardSDeckIndex2 = cardDeck[2]
  let cardSDeckIndex3 = cardDeck[3]
  let cardSDeckIndex4 = cardDeck[4]
  let cardSDeckIndex5 = cardDeck[5]

  removeCard(cardDeck,3) // Remove the string from index 3.  This should make index 4=3 and index 5=4

  expect(cardDeck[0]).toBe(cardSDeckIndex0)
  expect(cardDeck[1]).toBe(cardSDeckIndex1)
  expect(cardDeck[2]).toBe(cardSDeckIndex2)
  expect(cardDeck[3]).toBe(cardSDeckIndex4)
  expect(cardDeck[4]).toBe(cardSDeckIndex5)

});

test('getRandomCard return value > 0 < 52', () => {
  expect(getRandomCard(cardDeck)).toBeGreaterThanOrEqual(0)
  expect(getRandomCard(cardDeck)).toBeLessThanOrEqual(52)
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

test('P1 = Rock, P2 = Paper || = Loss', () => {
  expect(getResult('⛰️', '📰')).toBe("You lost!")
});

test('P1 = Rock, P2 = Rock || = Tie', () => {
  expect(getResult('⛰️', '⛰️')).toBe("It's a tie")
});

test('P1 = Rock, P2 = Scissors || = Win', () => {
  expect(getResult('⛰️', '✂️')).toBe("You won!")
});

test('P1 = Scissors, P2 = Paper || = Tie', () => {
  expect(getResult('✂️', '📰')).toBe("You won!")
});

test('P1 = Scissors, P2 = Rock || = Loss', () => {
  expect(getResult('✂️', '⛰️')).toBe("You lost!")
});

test('P1 = Scissors, P2 = Scissors || = Tie', () => {
  expect(getResult('✂️', '✂️')).toBe("It's a tie")
});