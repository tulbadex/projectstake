function createChessboard(size) {
    let board = "";

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            board += (row + col) % 2 === 0 ? " " : "#";
        }
        board += "\n"; // Move to the next line
    }

    console.log(board);
}

// Run with size 8
createChessboard(8);