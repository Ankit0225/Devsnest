function frequent(input) {
    let maximum = 0;
    let value = input[0];
    let hashmap = {};
    for (let i = 0; i < input.length; i++) {
      let element = input[i];
      if (hashmap[element]) {
        hashmap[element] += 1;
        if (hashmap[element] > maximum) {
          maximum = hashmap[element];
          value = element;
        }
      } else {
        hashmap[element] = 1;
        if (hashmap[element] > maximum) {
          maximum = hashmap[element];
          value = element;
        }
      }
    }
    console.log(hashmap);
    return value + " ( " + maximum + " times )";
  }
  console.log(frequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));