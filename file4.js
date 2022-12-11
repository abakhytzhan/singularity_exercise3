function whereIsWaldo(arr) {
  let indexFirst = [];
  let indexSecond = [];
  let countFirst = 0;
  let countSecond = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[0][0]) {
        countFirst++;
        if (countFirst === 1) {
          indexFirst = [i + 1, j + 1];
        }
      } else {
        countSecond++; 
        if (countSecond === 1) {
          indexSecond = [i + 1, j + 1];
        }
      }
      if (countFirst >= 2 && countSecond > 0) {
          return indexSecond;
        }
      if (countSecond >= 2 && countFirst > 0) {
          return indexFirst;
        }
    }
  }
}

console.log(whereIsWaldo([
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
])); // [3, 2]

console.log(whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
])); // [2, 4]

console.log(whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
])); // [5, 1]