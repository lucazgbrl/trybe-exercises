const convertRomans = (string) => {
  let romans = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  let converted = 0

  for (keys in romans) {
    string == keys ? console.log(romans[keys]) : (string[0] == keys || string[1] == keys) ? converted += romans[keys] : true ;
  }
  console.log(converted)
}

convertRomans('VI')