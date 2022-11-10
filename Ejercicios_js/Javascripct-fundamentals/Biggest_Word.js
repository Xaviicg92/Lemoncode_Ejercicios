/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */


function biggestWord (phrase) {
  frase = frase.split(/[,\s]+/);
  
  var palabraMasLarga = "";
  for (let i = 0; i < frase.length; i++) {
    if (frase[i].length > palabraMasLarga.length) {
      palabraMasLarga = frase[i];
    }
  }

  return palabraMasLarga;
}

var frase = "Estoy estudiando,,,,, en el campus Lemoncode";
palabra = biggestWord(frase);



console.log("La palabra más larga de esta frase es: " + palabra);