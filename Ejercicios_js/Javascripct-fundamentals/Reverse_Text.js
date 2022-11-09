// const reverseString = str => str.split(" ").reverse().join(" ");
// const a = "Buenas hola adios"
// console.log(a)
// console.log(reverseString(a));


function reverseString (string) {
    return string.split(" ").reverse().join(" ");
}

let prhase = "Uno dos tres cuatro";
console.log(reverseString(prhase));