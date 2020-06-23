// Biz Logic
export function Player(currentRoll, turnScore, totalScore, isActive) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.isActive = isActive;
}
Player.prototype.rollDice = function () {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber;
  if (randomNumber === 1) {
    this.turnScore = 0;
    this.currentRoll = 1;
    return true;
  } else {
    this.turnScore += randomNumber; 
    return false;
  }
};
Player.prototype.gameScore = function () {
  this.totalScore += this.turnScore;
  if (this.totalScore >= 100) {
    alert("you win");
  } else {
    return this.totalScore;
  }
};

Player.prototype.switchActive = function () {
  this.isActive = !this.isActive;
};
