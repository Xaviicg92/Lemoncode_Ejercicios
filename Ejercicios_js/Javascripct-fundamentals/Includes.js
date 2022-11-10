/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */


// PRIMERA FORMA

// function includes(array, value) {
//     for (const property in array) {
//         if (array[property] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// SEGUNDA FORMA

// function includes(array, value) {
//     for (i = 0; i < array.length; i ++) {
//         if (array[i] === value){
//             return true;
//         }
//     }
//     return false;
// }


// TERCERA FORMA

function includes(array, value) {
    if (array.indexOf(value) === -1) {
        return false;
    }
    return true;
}




  console.log(includes([1, 2, 3], 3)); 
  console.log(includes([1, 2, 3], 0)); 