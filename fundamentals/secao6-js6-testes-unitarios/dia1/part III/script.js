const studentRegister = (name, age) => {
  // seu código aqui
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  } else if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  } else {
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  }
}

try {
  studentRegister();
} catch (error) {
  error.message;
}

console.log(studentRegister('Lucas', 23));
