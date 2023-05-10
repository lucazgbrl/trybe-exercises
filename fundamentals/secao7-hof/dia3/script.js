const countries = require("./data.js");

// const expectedResult = 120797034;
const getPopulation = () => {
  const population = countries.map((el) => el.population);
  return population.reduce((a, b) => a + b);
}

// console.log(getPopulation());

//const expectedResult = 4311757;
const getTotalArea = () => {
// retorne seu código aqui
  const area = countries.map((el) => el.area);
  return area.reduce((a, b) => a + b);
}

// console.log(getTotalArea());

// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// }
const longestName = () => {
  // retorne seu código aqui
  return countries.reduce((a, b) => b.name.length < a.name.length ? a : b);
}

// console.log(longestName());

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// const expectedResult = 20;
const countA = () => {
  // retorne seu código aqui
  let count = 0;
  names.forEach((el) => {
      for(let index = 0; index < el.length; index += 1) {
        if (el[index] === 'a' || el[index] === 'A') {
          count +=1;
        }
      }
    }
  )

  return count;
}

// console.log(countA());

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = () => {
  // retorne seu código aqui
  const result = [];
  students.forEach((el, index) => result.push({
    name: el,
    average: (grades[index].reduce((a, b) => a + b)) / (grades[index].length),
    })
  );

  return result;
}

console.log(studentAverage());