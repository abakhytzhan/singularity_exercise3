function lonelyInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] * (-1))) {
      continue;
    } else {
      return arr[i];
    }
  }
}

console.log(lonelyInteger([1, -1, 2, -2, 3])); // 3
// 3 has no matching negative appearance.

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])); // -4
// -4 has no matching positive appearance.

console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); // -9