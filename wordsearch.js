//Pair programmed by Rajdeep Ghatore and Chris John

const transpose = function(matrix) {
  const rows = matrix.length;
  if (matrix[0]) {
    const columns = matrix[0].length;
    const newArray = [];
    for (let i = 0; i < columns; i++) {
      newArray[i] = new Array(rows);
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        newArray[j][i] = matrix[i][j];
      }
    }
    return newArray;
  }
};

const wordSearch = (letters, word) => {
  if (letters.length === 0 || word === '') {
    return false;
  }
  const lettersTranspose = transpose(letters);

  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontalJoin2 = lettersTranspose.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
    
  for (const l of horizontalJoin2) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;