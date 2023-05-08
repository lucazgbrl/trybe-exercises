const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrector = (arraySolutions, studentAnswers, compareResult) => {
  return compareResult(arraySolutions, studentAnswers);
}

const compareAnswers = (arraySolutions, studentAnswers) => {
  let result = 0;

  arraySolutions.forEach(element => {
    if (studentAnswers.find(alt => { alt === element }) !== undefined) {
      result += 1;
    } else if (studentAnswers.find(alt => { alt === `N.A`}) !== undefined) {
      result = result;
    } else {
      result -= 0.5;
    }
  });

  return Math.abs(result);
}

console.log(corrector(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));