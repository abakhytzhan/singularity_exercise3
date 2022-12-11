function intersectionUnion(arr1, arr2) {
    let interArr = [];
    let unionArr = [...new Set([...arr1, ...arr2])];
    for (let i = 0; i < arr1.length; i++) {
      if (!interArr.includes(arr1[i]) && arr2.includes(arr1[i])) {
        interArr.push(arr1[i]);
      } 
    }
    return [interArr, unionArr];
  }
  
  console.log(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9])); // [[4], [1, 2, 3, 4, 5, 9]]
  console.log(intersectionUnion([1, 2, 3], [4, 5, 6])); // [[], [1, 2, 3, 4, 5, 6]]
  console.log(intersectionUnion([1, 1], [1, 1, 1, 1])); // [[1], [1]]