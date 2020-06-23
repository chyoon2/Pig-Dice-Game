// Biz Logic
export function Player(currentRoll, turnScore, totalScore, isActive) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.isActive = isActive;
}

Player.prototype.rollDice = function () {
  let randNumb = randNumbGenerator();
  
  if (randNumb === 1) {
    this.turnScore = 0;
    return true;
  } else {
    this.turnScore += randNumb; 
    return false;
  }
};

export function randNumbGenerator () {
  this.currentRoll = Math.floor((Math.random() * 6) + 1);

  return this.currentRoll;
}
}
}
Player.prototype.gameScore = function () {
  this.totalScore += this.turnScore;
  if (this.totalScore >= 100) {
    return "you win";
  } else {
    return this.totalScore;
  }
};

Player.prototype.switchActive = function () {
  this.isActive = !this.isActive;
};
