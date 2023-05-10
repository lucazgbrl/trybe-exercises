const books = require('./bonusData');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// const flatten = () => arrays.flat();

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => books.map(el => el.author.name).reduce((a, b) => `${a}, ${b}`)

// console.log(reduceNames());

// const expectedResult = 43;

const averageAge = () => {
  // retorne seu código aqui
  const idades = books.map(el => el.releaseYear - el.author.birthYear)
  return idades.reduce((a, b,) => a + b) / idades.length;
}

// console.log(averageAge());

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => {
  // retorne seu código aqui
  return books.reduce((a, b) => a.name.length > b.name.length ? a : b);
}

console.log(longestNamedBook());