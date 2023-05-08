const newEmployees = (callback) => { // uma função pode receber uma outra função como parametro, desde que o retorno seja um valor direto, como se estivesse recebendo uma variavel, inclusive pra isso serve a função direta (const newFunc = () =>).
  const employees = {
    id1: callback('Pedro Guerra'), // uma váriavel pode ser uma função e seu retorno equivale ao valor de uma variavel normal.
    id2: callback('Luiza Drumond'), // uma váriavel pode ser uma função e seu retorno equivale ao valor de uma varável normal.
    id3: callback('Carla Paiva'), // uma varável pode ser uma funlçao e seu retorno equivale ao valor de uma váriavel normal.
  }
  return employees;
};

const newWorker = (workerName) => {
  email = workerName.toLowerCase().replace(' ', '_'); // você não precisa de uma variável nova pra editar o valor de uma string, pode concatenar na mesma linha as funções de edit. // o replace serve para substituir valores num array ou string, recebendo dois parametros(1. o valor a ser substituido (podendo ser inclusive espaços vazios), 2. o que será inserido no lugar)

  return  {
      workerName,
      email: `${email}@trybe.com`,
    }
}

console.log(newEmployees(newWorker));

//bom, nesse exercício eu só não achei muito bem explicado o que poderia ser alterado manualmente e o que deveria ser automatizado, mas okay, eu saberia fazer se tivesse sido melhor explicado.