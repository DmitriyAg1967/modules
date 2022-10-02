const defaultCharacter = require('./domain.js').defaultCharacter;

class Game {
  start() {
    console.log('game started');
  }
}
const defaultGame = new Game();
exports.defaultGame = defaultGame;

class GameSavingData {
}
exports.GameSavingData=GameSavingData;

function readGameSaving() {
}
exports.readGameSaving=readGameSaving;

function writeGameSaving() {
}
exports.writeGameSaving=writeGameSaving;

console.log('file game imported');
