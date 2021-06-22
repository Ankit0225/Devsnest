
function arrayclone(value){

    let clone = [];
    for (i of value) {
        clone.push(i);
    }
 return clone;   
}
console.log(arrayclone([1, 2, 4, 0]));
console.log(arrayclone([1, 2, [4, 0]]));