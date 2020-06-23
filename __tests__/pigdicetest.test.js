import { Player } from './../src/piggydie.js';

describe ('Player', () => {
  test('should correctly create a player object with currentRoll, turnScore, totalScore, isActive properties', () => {
    const player = new Player(0,0,0, true);
    expect(player.currentRoll).toEqual(0);
    expect(player.turnScore).toEqual(0);
    expect(player.totalScore).toEqual(0);
    expect(player.isActive).toBe(true);
  });

  test('should correctly return true or false', () => {
    const player = new Player(0,0,0, true);
    expect(typeof(player.rollDice())).toBe("boolean");
  })
});

