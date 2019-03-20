module.exports = function solveSudoku(matrix) {
  // My solution
  for (let i = 0; i < matrix.length; i++) {             // run through the matrix
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {                         // when zero-value found
        for (let n = 1; n < 10; n++){                   // we'll try to find the correct assignment to it
          let [r, c] = [0, 0];
          if (i <= 2) r = 0;                            // to determine the square where we have found zero-value
          if (i >= 3 && i <= 5) r = 3;
          if (i >= 6 && i <= 8) r = 6;
          if (j <= 2) c = 0;
          if (j >= 3 && j <= 5) c = 3;
          if (j >= 6 && j <= 8) c = 6;
          if (                                          // to check if this value is present in row, col, or square
            matrix[i].reduce((s, v) => s.add(v), new Set()).has(n) ||
            matrix.reduce((s, v) => s.add(v[j]), new Set()).has(n) ||
            matrix.slice(r, r + 3).reduce((s, v) => v.slice(c, c + 3).reduce((s, v) => s.add(v), s), new Set()).has(n)
            ) continue;
            matrix[i][j] = n;
            if(solveSudoku(matrix)) return matrix;      // to recursively check for the next zero-values
            matrix[i][j] = 0;
        }
        return false;                                   // to return to the previous value when the present is not correct
      }        
    }
  }
  return matrix;
}
