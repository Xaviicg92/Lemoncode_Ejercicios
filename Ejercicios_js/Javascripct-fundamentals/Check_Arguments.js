/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */




// function f(input) {
//     var result;
//     if (input === undefined) {
//       result = "Unknown";
//     } else if (input === null) {
//       result = "";
//     } else {
//       result = input;
//     }
//     return result;
//   }

// PRIMERA FORMA CON OPERADOR TERNARIO UTILIZAR JUNTO CON OR

function f(input) {
    
    return input === undefined ? "Unknown" : input === null ? "" : input;
}

let input = undefined;
f(input);
//console.log(f(input));


// SEGUNDA FORMA CON OPERADOR OR

// function f2(input) {
//     var result; 
//     if (input === undefined || input === null){
//         result = "Unknown"
//     }
//     else {
//         result = input;
//     }
//     return result;
// }

// let input2 = null;
// console.log (f2(input2));