function operation(num1, num2, str) {
  if ((typeof(num1) === 'string' || typeof(num1) === 'number')  && !isNaN(Number(num1))) {
    num1 = Number(num1);
  } else {
    return "Error";
  }
  if ((typeof(num2) === 'string' || typeof(num2) === 'number')  && !isNaN(Number(num2))) {
    num2 = Number(num2);
  } else {
    return "Error";
  }
  
  switch(str) {
    case "add": 
    return num1 + num2;
    case "subtract": 
    return num1 - num2;
    case "divide": 
    return num1 / num2;
    case "multiply": 
    return num1 * num2;
    default:
      return "Error";
  }
}
  
  console.log(operation("1",  "2", "add")); // 3
  console.log(operation("4", "5", "subtract")); // -1
  console.log(operation("6", "3", "divide")); // 2
  console.log(operation("6", "3", "multiply")); // 2