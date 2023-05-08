const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const generateDragonDamage = () => {
  return Math.floor(Math.random() * (dragon.strength - 15) + 15);
}

const generateWarriorDamage = () => {
  return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
}

const mageDmgMana = () => {
  if (mage.mana < 15) {
    return {
      damage: `Não possui mana suficiente`,
      mana: 0
    }
  }

  const damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  return {
    damage: damage,
    mana: 15,
  }
}

const gameActions = {
  warriorTurn(warriorDmg) {
    dragon.healthPoints -= warriorDmg();
    warrior.damage = warriorDmg();
  },
  mageTurn(mageDmg) {
    dragon.healthPoints -= mageDmg().damage;
    mage.damage = mageDmg().damage;
    mage.mana -= mageDmg().mana;
  },
  dragonTurn(dragonDmg) {
    mage.healthPoints -= dragonDmg();
    warrior.healthPoints -= dragonDmg();
    dragon.damage = dragonDmg();
  },
  returnResult() {
    this.warriorTurn(generateWarriorDamage);
    this.mageTurn(mageDmgMana);
    this.dragonTurn(generateDragonDamage);
    
    return battleMembers;
  }
}

console.log(gameActions.returnResult());