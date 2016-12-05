const prompt = require('prompt');

class TicTacToeGame {
  constructor(board) {
    if (board !== undefined) {
      this.board = board;
    }
  }

  play() {
    this.startNewGame();
  }

  printBoard(board) {
    // MVP print. I'll add some ASCII art later.
    board.forEach((row) => {
      console.log(row);
    });
  }

  printGameBoard() {
    console.log('Game Board');
    this.printBoard(this.board);
    console.log('');
  }

  printReferenceBoard() {
    console.log('Reference Board');
    this.printBoard([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    console.log('');
  }

  buildNewBoard() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  determineWinner() {
    const thereIsAWinner = false;

    return 'x';
  }

  startNewGame() {
    this.buildNewBoard();
    this.printGameBoard();
    this.printReferenceBoard();
    prompt.get(['choice'], (err, result) => {
      console.log(result);
    });
  }
}

//const ttt = new TicTacToeGame();
//ttt.play();

module.exports = TicTacToeGame;
