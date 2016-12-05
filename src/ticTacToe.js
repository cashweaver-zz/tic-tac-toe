// Tic Tac Toe

class TicTacToeGame {
  constructor() {
  }

  printBoard() {
    // MVP print. I'll add some ASCII art later.
    this.board.forEach((row) => {
      console.log(row);
    });
  }

  buildNewBoard() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  startNewGame() {
    this.buildNewBoard();
    this.printBoard();
  }

  play() {
    this.startNewGame();
  }
}

const ttt = new TicTacToeGame();
ttt.play();
