

// function includes(array, value) {
//     for (const property in array) {
//         if (array[property] === value) {
//             return true;
//         }
//     }
//     return false;
// }


function includes(array, value) {
    for (i = 0; i < array.length; i ++) {
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

// function includes(array, value) {
//     const isLargeNumber = (element) => element = value;
//     var indice = array.findIndex(isLargeNumber);
//     console.log(indice);
//     var resultado = (indice =! -1) ? true : false;
//     return resultado;
// }




  console.log(includes([1, 2, 3], 3)); // true
  console.log(includes([1, 2, 3], 0)); // false