const expect = require('chai').expect;
const TicTacToeGame = require('./ticTacToe');

describe('Tic Tac Toe', () => {
  describe('Victory Conditions', () => {
    describe('Empty', () => {
      it('should not determine victory for anyone', () => {
        const ttt = new TicTacToeGame([
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' '],
        ]);
        expect(ttt.determineWinner()).to.equal(false);
      });
    });
    describe('Rows', () => {
      describe('Top', () => {
        it('should determine victory for X', () => {
          const ttt = new TicTacToeGame([
            ['X', 'X', 'X'],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('X');
        });

        it('should determine victory for O', () => {
          const ttt = new TicTacToeGame([
            ['O', 'O', 'O'],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('O');
        });
      });

      describe('Middle', () => {
        it('should determine victory for X', () => {
          const ttt = new TicTacToeGame([
            [' ', ' ', ' '],
            ['X', 'X', 'X'],
            [' ', ' ', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('X');
        });

        it('should determine victory for O', () => {
          const ttt = new TicTacToeGame([
            [' ', ' ', ' '],
            ['O', 'O', 'O'],
            [' ', ' ', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('O');
        });
      });

      describe('Bottom', () => {
        it('should determine victory for X', () => {
          const ttt = new TicTacToeGame([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            ['X', 'X', 'X'],
          ]);
          expect(ttt.determineWinner()).to.equal('X');
        });

        it('should determine victory for O', () => {
          const ttt = new TicTacToeGame([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            ['O', 'O', 'O'],
          ]);
          expect(ttt.determineWinner()).to.equal('O');
        });
      });
    });

    describe('Columns', () => {
      describe('Left', () => {
        it('should determine victory for X', () => {
          const ttt = new TicTacToeGame([
            ['X', ' ', ' '],
            ['X', ' ', ' '],
            ['X', ' ', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('X');
        });

        it('should determine victory for O', () => {
          const ttt = new TicTacToeGame([
            ['O', ' ', ' '],
            ['O', ' ', ' '],
            ['O', ' ', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('O');
        });
      });

      describe('Middle', () => {
        it('should determine victory for X', () => {
          const ttt = new TicTacToeGame([
            [' ', 'X', ' '],
            [' ', 'X', ' '],
            [' ', 'X', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('X');
        });

        it('should determine victory for O', () => {
          const ttt = new TicTacToeGame([
            [' ', 'O', ' '],
            [' ', 'O', ' '],
            [' ', 'O', ' '],
          ]);
          expect(ttt.determineWinner()).to.equal('O');
        });
      });

      describe('Right', () => {
        it('should determine victory for X', () => {
          const ttt = new TicTacToeGame([
            [' ', ' ', 'X'],
            [' ', ' ', 'X'],
            [' ', ' ', 'X'],
          ]);
          expect(ttt.determineWinner()).to.equal('X');
        });

        it('should determine victory for O', () => {
          const ttt = new TicTacToeGame([
            [' ', ' ', 'O'],
            [' ', ' ', 'O'],
            [' ', ' ', 'O'],
          ]);
          expect(ttt.determineWinner()).to.equal('O');
        });
      });
    });

    describe('Diagonal', () => {
      it('should determine victory for X', () => {
        const ttt = new TicTacToeGame([
          ['X', ' ', ' '],
          [' ', 'X', ' '],
          [' ', ' ', 'X'],
        ]);
        expect(ttt.determineWinner()).to.equal('X');
      });

      it('should determine victory for O', () => {
        const ttt = new TicTacToeGame([
          ['O', ' ', ' '],
          [' ', 'O', ' '],
          [' ', ' ', 'O'],
        ]);
        expect(ttt.determineWinner()).to.equal('O');
      });

      it('should determine victory for X', () => {
        const ttt = new TicTacToeGame([
          [' ', ' ', 'X'],
          [' ', 'X', ' '],
          ['X', ' ', ' '],
        ]);
        expect(ttt.determineWinner()).to.equal('X');
      });

      it('should determine victory for O', () => {
        const ttt = new TicTacToeGame([
          [' ', ' ', 'O'],
          [' ', 'O', ' '],
          ['O', ' ', ' '],
        ]);
        expect(ttt.determineWinner()).to.equal('O');
      });
    });
  });
});
