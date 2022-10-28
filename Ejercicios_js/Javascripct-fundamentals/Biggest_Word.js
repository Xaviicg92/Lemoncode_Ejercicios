

function biggestWord (phrase) {
    //var frase = phrase.replace(/[,]/g, "");
    var frase = phrase.split('');
    var palabra = "";
    var palabras = [];
    
    for (let i = 0; i <= frase.length; i++) {
         if (frase[i] != " " && i != frase.length) {
            palabra = palabra + frase[i];
         } else {
            palabras.push(palabra);
            palabra = "";
         }
         
    }

    var palabraMasLarga = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}
var frase = "Estoy estudiando en el campus Lemoncode";
palabra = biggestWord(frase);
console.log("La palabra más larga de esta frase es: " + palabra);