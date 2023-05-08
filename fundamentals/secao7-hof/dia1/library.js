const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// exercise1

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  // escreva aqui o seu código
  const requiredAuthor = books.find(element => { return element.author.birthYear === 1947; });

  return requiredAuthor.author.name;
}

console.log(authorBornIn1947());

//exercise2 

//const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach(element => {
    if (element.name.length < nameBook.length) { nameBook = element.name }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());

//exercise3 

/*const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};*/

const getNamedBook = () => {
  // escreva seu código aqui
  const lettesEqual26 = books.find(element => {
    if (element.name.length === 26) {
      return element;
    }
  })

  return lettesEqual26;
}

console.log(getNamedBook());

//exercise 4
// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(element => {
    element.author.birthYear > 1901 && element.author.birthYear < 2000
  })
}

console.log(everyoneWasBornOnSecXX());

//exercise 5

//const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  const even = (element) => element.releaseYear > 1979 && element.releaseYear < 1990;
  return books.some(even);
}

console.log(someBookWasReleaseOnThe80s());

//exercise 6

//const expectedResult = false;

const authorUnique = () => {
  // escreva seu código aqui
  let result = false;

  books.forEach(element => {
    result = !(books.some((el) => el.author.birthYear === element.author.birthYear)); 
  })

  return result;
}

console.log(authorUnique());