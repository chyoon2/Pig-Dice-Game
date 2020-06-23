// Biz Logic
export function Player(currentRoll, turnScore, totalScore, isActive) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.isActive = isActive;
}

Player.prototype.rollDice = function () {
  let randNumb = randNumbGenerator();
  this.currentRoll = randNumb;
  if (randNumb === 1) {
    this.turnScore = 0;
    return true;
  } else {
    this.turnScore += randNumb; 
    return false;
  }
};

export function randNumbGenerator () {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  return randomNumber;
}
Player.prototype.gameScore = function () {
  this.totalScore += this.turnScore;
  if (this.totalScore >= 100) {
    return "you win";
  } else {
    return this.totalScore;
  }
};

// Player.prototype.switchActive = function () {
//   this.isActive = !this.isActive;
// };
