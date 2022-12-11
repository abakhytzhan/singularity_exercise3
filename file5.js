  function f1() {
    return "hello";
  }
  
  function f2() {
    return f1;
  }
  
  function f3() {
    return f2;
  }
  
  
  function funcSort(arr) {
    let arr2 = [];
    for (let f of arr) {
      let elem = f;
      for (let i = 0; i < 3; i++) {
        if (typeof(elem) !== 'function') {
          arr2[i] = f;
          break;
        } else {
          if (typeof(elem()) === 'string') {
          arr2[i] = f;
          break;
          } else {
            elem = elem();
          }
        }
      }
    }
    let arr3 = [];
    for (let elem of arr2) {
      if (typeof(elem) === 'function' || typeof(elem) === 'string') {
        arr3.push(elem);
      }
    }
    return arr3;
  }
  
  console.log(funcSort([f2, f3, f1])); // [f1, f2, f3]
  console.log(funcSort([f1, f2, f3])); // [f1, f2, f3]
  console.log(funcSort([f3, "func"])); // ["func", f2]