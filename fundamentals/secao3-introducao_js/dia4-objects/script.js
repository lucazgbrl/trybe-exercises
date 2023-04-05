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

let order = {
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
  console.log(`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, No ${order.address.number}, AP: ${order.address.apartment}.`
  ) 
}

customerInfo(order);

function orderModifier(order) {
  
}

orderModifier(order);