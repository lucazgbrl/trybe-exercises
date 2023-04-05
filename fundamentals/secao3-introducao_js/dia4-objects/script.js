/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vindo(a), ' + info.personagem + '.')

info.recorrente = 'Sim'

console.log(info)

let info2 = {
  personagem: 'Tio Patinhas' ,
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas' ,
  recorrente: 'Sim'
}


for (value in info) {
  if (
    value === 'recorrente' && 
    info[value] === 'Sim' &&
    info2[value] === 'Sim'
  ){
      console.log('Ambos recorrentes')
  } else {
    console.log(info[value] + ' e ' + info2[value])
  }
}*/

/*let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`)

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`)*/

/*let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  console.log(`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, No ${order.address.number}, AP: ${order.address.apartment}.`) 
}

customerInfo(order);

function orderModifier(order) {
  order.name = 'Luiz Silva'
  order.payment.total = '50,00'

  console.log(`Olá, ${order.name}, o valor total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$${order.payment.total}`) 
}

orderModifier(order);*/

let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurno(objeto, chave, valor) {
  objeto[`${chave}`] = valor
  console.log(lesson2)
}

addTurno(lesson2, 'turno', 'noite')

function listKeys(objeto) {
  console.log(Object.keys(objeto))
}

listKeys(lesson1)

const showSize = (objeto) => {
  console.log(Object.keys(objeto).length)
}

showSize(lesson3)

const showValues = (objeto) => {console.log(Object.values(objeto))}

showValues(lesson2)

const allLessons = {}

allLessons.lesson1 = lesson1
allLessons.lesson2 = lesson2
allLessons.lesson3 = lesson3

console.log(allLessons)

const showAllStudents = (objeto) => {
  let estudantes1 = objeto.lesson1.numeroEstudantes
  let estudantes2 = objeto.lesson2.numeroEstudantes
  let estudantes3 =  objeto.lesson3.numeroEstudantes

  console.log(`O número total de estudantes é ${estudantes1 + estudantes2 + estudantes3}`)
}

showAllStudents(allLessons)

const showValue = (objeto, index) => {
  console.log(`${Object.values(objeto)[index]}`)
}

showValue(lesson1, 0)

const verifyPair = (objeto, chave, valor) => {
  let result = false
  for (value in objeto) {
    (objeto[`${chave}`] == `${valor}`) ? result = true : result = result;
  }
  console.log(result)
}

verifyPair(lesson3, 'materia', 'Maria Clara')