import { Player } from './../src/piggydie.js';

describe ('Player', () => {
  test('should correctly create a player object with currentRoll, turnScore, totalScore, isActive properties', () => {
    const player = new Player(0,0,0, true);
    expect(player.currentRoll).toEqual(0);
    expect(player.turnScore).toEqual(0);
    expect(player.totalScore).toEqual(0);
    expect(player.isActive).toBe(true);
  });

  test('should correctly return turn score to 0 if one is rolled', () => {
   const player = new Player(1,0,0, true);
    expect(player.turnScore).toEqual(0);

    test('should correctly return turn score to 0 if one is rolled', () => {
      const player = new Player(2,0,0, true);
       expect(player.turnScore).toEqual(2);
  

  test('should return true or false', () => {
    const player = new Player(0,0,0, true);
    expect(typeof(player.rollDice())).toBe("boolean");
  })

  test('should correctly return when gamescore reaches 100', () => {
    const player = new Player(0,0,100, true);
    expect(player.gameScore()).toEqual("you win");
  })

  test('should change player 1 status from active to inactive', () => {
    const player = new Player(0,0,0,true);
    player.switchActive();
    expect(player.isActive).toBe(false)
  })
});

