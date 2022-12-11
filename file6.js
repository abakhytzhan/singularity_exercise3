function toArray(obj) {
    let array = [];
    for (let elem in obj) {
      let arr = [elem, obj[elem]];
      array.push(arr);
    }
    return array;
  }
  
  console.log(toArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]
  console.log(toArray({ shrimp: 15, tots: 12 })); // [["shrimp", 15], ["tots", 12]]
  console.log(toArray({})); // []