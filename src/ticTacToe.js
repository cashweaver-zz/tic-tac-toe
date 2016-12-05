const prompt = require('prompt');

class TicTacToeGame {
  constructor(board) {
    this.marks = {
      player1: 'X',
      player2: 'O',
      empty: ' ',
    }
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
    this.board = [];
    for (let i = 0; i < 3; i += 1) {
      this.board.push([]);
      for (let j = 0; j < 3; j += 1) {
        this.board[i].push(this.marks.empty);
      }
    }
  }

  determineWinner() {
    let thereIsAWinner = false;

    if (!thereIsAWinner) {
      this.board.forEach((row) => {
        const topRowWinner = row.reduce((allSame, curVal) => (
          (allSame === curVal && curVal !== ' ') ? curVal : null
        ));

        if (topRowWinner) {
          thereIsAWinner = topRowWinner;
        }
      });
    }

    return thereIsAWinner;
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
