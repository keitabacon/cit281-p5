/*
    CIT 281 Project 5:

    Name: Your Name
*/

// Monster class
class Monster {
    constructor({
      monsterName = "Unknown",
      minimumLife = 0,
      currentLife = 100,
    }) {
      this.monsterName = monsterName;
      this.minimumLife = minimumLife;
      this.currentLife = currentLife;
      this.isAlive = this.currentLife >= this.minimumLife;
    }
  
    updateLife(lifeChangeAmount) {
      this.currentLife += lifeChangeAmount;
      this.currentLife = Math.max(this.currentLife, 0);
      this.isAlive = this.currentLife >= this.minimumLife;
    }
  
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
      const lifeChangeAmount = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
      this.updateLife(-lifeChangeAmount);
      console.log(`${this.monsterName} lost ${lifeChangeAmount} life.`);
    }
  }
  
  // Utility function to get a random integer between min (inclusive) and max (exclusive)
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  module.exports = Monster;
  
