
const Monster = require("./p5-monster.js");

class MonsterGame {
  constructor({
    monsterList = [],
    gameDelayInMilliseconds = 5000,
    minimumLifeDrain = 1,
    maximumLifeDrain = 30,
  }) {
    console.log("Initializing monsters...");
    this.gameDelayInMilliseconds = gameDelayInMilliseconds;
    this.minimumLifeDrain = minimumLifeDrain;
    this.maximumLifeDrain = maximumLifeDrain;
    this.createMonsters(monsterList);
    console.log("Monsters initialized, ready to play!");
  }

  listMonsters() {
    this.monsters.forEach((monster) => {
      console.log(`Monster: ${monster.monsterName}`);
      console.log(`Minimum Life: ${monster.minimumLife}`);
      console.log(`Current Life: ${monster.currentLife}`);
      console.log(`Status: ${monster.isAlive ? 'Alive' : 'Dead'}`);
      console.log("---------------------------");
    });
  }

  createMonsters(monsterList = []) {
    this.monsters = monsterList.map((monster) => new Monster(monster));
  }

  async playGame() {
    console.log("Starting game...");
    let monstersAreAlive = true;
    do {
      console.log(`Sleeping for ${this.gameDelayInMilliseconds} milliseconds...`);
      await sleep(this.gameDelayInMilliseconds);

      this.monsters.forEach((monster) => {
        if (monster.isAlive) {
          monster.randomLifeDrain(
            this.minimumLifeDrain,
            this.maximumLifeDrain
          );
        }
      });

      this.listMonsters();

      monstersAreAlive = this.monsters.some((monster) => monster.isAlive);

      if (!monstersAreAlive) {
        console.log("All monsters have died, game over!");
      }
    } while (monstersAreAlive);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = MonsterGame;
