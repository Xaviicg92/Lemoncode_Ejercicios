/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */


function subsets(word) {
    let array = [];
    while (word.length > 1){
        word = word.slice(1, word.length);
        array.push(word);
    }
    
    return array

  }

  let palabra = "javier";
  console.log(subsets(palabra));