function trace(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][i];
    }
    return sum;
  }
  
  console.log(trace([
    [1, 4],
    [4, 1]
  ])); // 2
  
  // 1 + 1 = 2
  
  console.log(trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])); // 15
  
  // 1 + 5 + 9 = 15
  
  console.log(trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4]
  ])); // 10
  
  // 1 + 2 + 3 + 4 = 10