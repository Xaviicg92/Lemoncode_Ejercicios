/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */


let array1 = [1, 2, 3];
let array2 = [3, 5, 7];
let array3 = [9, 5, 6];



// APARTADO A
const concat = (a, b) => [...a, ...b]; 
console.log(concat(array1, array2))



// APARTADO B

// const concatBetter = () => {
//     let resultado = [];
//     for (i = 0; i <= arguments.length; i++){
//         var myArray = arguments[i];
        
//         resultado.push(myArray)

//     }
//     console.log (resultado);
//     return ([...resultado]);
// };

// console.log(concatBetter(array1, array2, array3))






