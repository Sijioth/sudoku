module.exports = function solveSudoku(matrix) {
  // My solution
  // let col = 0;
  // let row = 0;
  // for (let k = 0; k < 9; k++) {
    // let [r,c] = [Math.floor(k/3)*3,(k%3)*3];
    // console.log("k>>>" + k + "...r>>>" + r + "...c>>>" + c);
    // console.log(matrix[k].reduce((s,v)=>s.add(v),new Set()));
    // console.log(matrix);
    // if (
        // (matrix[k].reduce((s,v)=>s.add(v),new Set()).size == 9) ||
        // (matrix.reduce((s,v)=>s.add(v[k]),new Set()).size == 9) ||
        // (matrix.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>s.add(v),s),new Set()).size == 9)
      // ) return true;
      //return false;   // instead of return there must be code to search and assing zero-value to number
      // {
        // console.log("k>>" + k + "..s>>" + s + "..v>>" + v);
      // }
    //   return true;
  // }

  // if (isSolved(matrix)) return matrix;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        // row = i;
        // col = j;
        // console.log(row + "..." + col);
        for (let n = 1; n < 10; n++){
          let [r,c] = [0, 0];//[Math.floor(i/3)*3,(i%3)*3];
            // console.log("...r>>>" + r + "...c>>>" + c);
            if (i <= 2) r = 0;
            if (i >= 3 && i <= 5) r = 3;
            if (i >= 6 && i <= 8) r = 6;
            if (j <= 2) c = 0;
            if (j >= 3 && j <= 5) c = 3;
            if (j >= 6 && j <= 8) c = 6;
          // let [r,c] = [i, j - 1];
          // whichSquare(i, j, [r, c]);
          if (
            matrix[i].reduce((s,v)=>s.add(v),new Set()).has(n) ||
            matrix.reduce((s,v)=>s.add(v[j]),new Set()).has(n) ||
            // checkBox(n, i, j)
            matrix.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>s.add(v),s),new Set()).has(n)
            ) {
              // console.log(matrix[i].reduce((s,v)=>s.add(v),new Set()));
              // console.log(matrix.reduce((s,v)=>s.add(v[j]),new Set()));
              // console.log(matrix.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>s.add(v),s),new Set()));
              continue;
            }
            matrix[i][j] = n;

            if(solveSudoku(matrix)) return matrix;
            // console.log(matrix);

            matrix[i][j] = 0;
        }
        return false;
      }        
    }
  }


  // let answer = [];
// for (let i = 0; i < matrix.length; i++) {
  // for (let j = 0; j < matrix[i].length; j++) {
    // answer.push(matrix[i][j]);
    // if (matrix[i][j] == 0);
  // console.log(answer);

  // }
// }

// function whichSquare(i, j, [r, c]) {
//   if (i <= 2) r = 0;
//   if (i >= 3 && i <= 5) r = 3;
//   if (i >= 6 && i <= 8) r = 6;
//   if (j <= 2) c = 0;
//   if (j >= 3 && j <= 5) c = 3;
//   if (j >= 6 && j <= 8) c = 6;
//   return [r, c];
// }

function checkBox (num, row, col) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // console.log("row>>>" + (row) + "...col>>>" +(col));
      // if (row <= 2) row = 0;
      // if (row >= 3 && row <= 5) row = 3;
      // if (row >= 6 && row <= 8) row = 6;
      // if (col <= 2) col = 0;
      // if (col >= 3 && col <= 5) col = 3;
      // if (col >= 6 && col <= 8) col = 6;
      // console.log("i+row>>>" + (i+row) + "...j+col>>>" +(j+col));
      // console.log(matrix[i + row][j + col]);
      // console.log("....................................");
      if (matrix[i + row][j + col] == num) return true;
      // console.log(matrix);
      return false;
    }
  }
}

function isSolved (sudoku) {
  for (let i = 0; i < 9; i++) {
    let [r,c] = [Math.floor(i/3)*3,(i%3)*3];
    // console.log("i>>>" + i + "...r>>>" + r + "...c>>>" + c);
    if (
        (sudoku[i].reduce((s,v)=>s.add(v),new Set()).size != 9) ||
        (sudoku.reduce((s,v)=>s.add(v[i]),new Set()).size != 9) ||
        (sudoku.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>s.add(v),s),new Set()).size != 9)
      ) return false;
  }
  return true;
}
  
  // console.log(matrix);
  // return answer;
  return matrix;
}
