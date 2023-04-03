let info = {
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
}



