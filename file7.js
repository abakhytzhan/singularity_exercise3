function concat(...rest) {
    let arr = [];
    for (let elem of rest) {
      arr.push(...elem);
    }
    return arr;
  }
  
  console.log(concat([1, 2, 3], [4, 5], [6, 7])); // [1, 2, 3, 4, 5, 6, 7]
  console.log(concat([1], [2], [3], [4], [5], [6], [7])); // [1, 2, 3, 4, 5, 6, 7]
  console.log(concat([1, 2], [3, 4])); // [1, 2, 3, 4]
  console.log(concat([4, 4, 4, 4, 4])); // [4, 4, 4, 4, 4]