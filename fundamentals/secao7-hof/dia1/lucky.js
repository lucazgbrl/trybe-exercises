function getRandomInt(num, tryMyLucky) {
  const draw = Math.floor(Math.random() * 6);

  return tryMyLucky(draw, num) === true ? `Parabéns, você ganhou!` : `Tente novamente`;
}

const tryMe = (draw, num) => {
  return draw === num ? true : false ;
}

console.log(getRandomInt(4, tryMe));

