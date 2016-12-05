const expect = require('chai').expect;
const TicTacToeGame = require('./ticTacToe');

describe('Tic Tac Toe', () => {
  describe('Victory Conditions', () => {
    it('should show top-row as a victory', () => {
      const ttt = new TicTacToeGame([
        ['x', 'x', 'x'],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ]);
      expect(ttt.determineWinner()).to.equal('x');
    });
  });
});
