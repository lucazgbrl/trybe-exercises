const techList = (arrayTech, name) => {
  if(arrayTech.length === 0) { return 'Vazio!'};

  const techSorted = arrayTech.sort();
  const arrayExpected = [];

  for(let index = 0; index < arrayTech.length; index += 1){
    arrayExpected.push({
      tech: techSorted[index],
      name
    })
  };

  return arrayExpected;
}

module.exports = techList;