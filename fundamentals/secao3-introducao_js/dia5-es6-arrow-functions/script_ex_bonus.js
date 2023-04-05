const substituaX = (nome) => {
    const frase = 'Tryber x aqui!'
    let splitFrase = frase.split(' ')
    for (word in splitFrase) {
        splitFrase[word] == 'x' ? splitFrase[word] = `${nome}` : splitFrase[word]
    }

    let newPhrase = splitFrase.join(' ')
    return newPhrase
}

substituaX('Bebeto')

function minhasSkills (substituaX) {
    const skills = ['JavaScript', 'CSS', 'HTML' ]
    let mensagem = `${substituaX} 
    My skills are ${skills}`

    return console.log(mensagem)
}

minhasSkills(substituaX('Bebeto'))