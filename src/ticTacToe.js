const prompt = require('prompt');

class TicTacToeGame {
  constructor(board) {
    this.marks = {
      player1: 'X',
      player2: 'O',
      empty: ' ',
    };
    this.curPlayer = 1;

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

    // Check rows
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

    // Check columns
    if (!thereIsAWinner) {
      for (let columnIndex = 0; columnIndex < this.board[0].length; columnIndex += 1) {
        let allSame = this.board[0][columnIndex];
        for (let rowIndex = 1; rowIndex < this.board.length; rowIndex += 1) {
          const curVal = this.board[rowIndex][columnIndex];
          allSame = (allSame === curVal && curVal !== ' ') ? curVal : null
        }

        if (allSame) {
          thereIsAWinner = allSame;
        }
      }
    }

    // Diagonal left-right
    if (!thereIsAWinner) {
      let allSame = this.board[0][0];
      for (let i = 1; i < this.board.length; i += 1) {
        const curVal = this.board[i][i];
        allSame = (allSame === curVal && curVal !== ' ') ? curVal : null
      }

      if (allSame) {
        thereIsAWinner = allSame;
      }
    }

    // Diagonal right-left
    if (!thereIsAWinner) {
      let allSame = (
        (this.board[0][2] !== ' ') &&
        (this.board[0][2] === this.board[1][1]) &&
        (this.board[1][1] === this.board[2][0]));


      if (allSame) {
        thereIsAWinner = this.board[0][2];
      }
    }

    return thereIsAWinner;
  }

  nextRound() {
    this.printGameBoard();
    this.printReferenceBoard();

    console.log(`Player ${this.curPlayer}'s move!'`);
    prompt.get(['choice'], (err, result) => {
      console.log(result);

      const winner = this.determineWinner();
      if (!winner) {
        this.curPlayer = (this.curPlayer === 1) ? 2 : 1;
        this.nextRound();
      } else {
        console.log(`${winner} won!`);
      }
    });
  }

  startNewGame() {
    this.buildNewBoard();

    this.nextRound();
  }
}

module.exports = TicTacToeGame;
