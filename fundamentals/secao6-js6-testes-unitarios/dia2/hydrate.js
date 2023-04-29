const hydrate = (string) => {
  const getNumbers = string.match(/\d/g);
  let quantity = 0;

  for(index of getNumbers) {
    quantity += parseInt(index);
  }

  return quantity > 1 ? `${quantity} copos de água` : `1 copo de água`;
}

module.exports = hydrate;