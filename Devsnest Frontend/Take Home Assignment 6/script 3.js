function nthElement(value, n = 0) {
    if (n == 0) {
      return value[0];
    } else if (n < 0) {
      return [];
    } else {
      if (n > value.length) {
        return value;
      }
      let newArray = [];
      for (let i = 0; i < n; i++) {
        newArray.push(value[i]);
      }
      return newArray;
    }
  }
  
  console.log(nthElement([7, 9, 0, -2], 1));
  console.log(nthElement([], 3));
  console.log(nthElement([7, 9, 0, -2], 3));
  console.log(nthElement([7, 9, 0, -2], 6));
  console.log(nthElement([7, 9, 0, -2], -3));