/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */


function reverseString (string) {
    return string.split(" ").reverse().join(" ");
}

let prhase = "Uno dos tres cuatro";
console.log(reverseString(prhase));