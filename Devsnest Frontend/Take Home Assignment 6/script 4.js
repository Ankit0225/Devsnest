const joint = (val) => {
    let newString = "";
    for (let i = 0; val.length - 1; i++) {
      newString += val[i] + ",";
    }
    newString += val[val.length - 1];
    return newString;
  };
  
  console.log(joint(["Red", "Green", "White", "Black"]));
  
  function join(val) {
    //Alternatively val.join() could have been used
    let newString = "";
    for (let i = 0; i < val.length - 1; i++) {
      newString += val[i] + ",";
    }
    newString += val[val.length - 1];
    return newString;
  }
  
  console.log(join(["Red", "Green", "White", "Black"]));