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
    activePlayer();
  } else { this.turnScore += randomNumber; }
  return this.currentRoll;
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
export function activePlayer() {
  if (player1.isActive === true && player2.isActive === false) {
    $(".btn-holdTwo").show();
    $(".btn-rollTwo").show();
    $(".btn-holdOne").hide();
    $(".btn-rollOne").hide();
    player1.switchActive();
    player2.switchActive();
  } else if (player2.isActive === true && player1.isActive === false) {
    $(".btn-holdOne").show();
    $(".btn-rollOne").show();
    $(".btn-holdTwo").hide();
    $(".btn-rollTwo").hide();
    player1.switchActive();
    player2.switchActive();
  }
}