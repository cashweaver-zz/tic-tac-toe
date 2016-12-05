// Tic Tac Toe


const printBoard = (board) => {
  // MVP print. I'll add some ASCII art later.
  board.forEach((row) => {
    console.log(row);
  })
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];
printBoard(board);
