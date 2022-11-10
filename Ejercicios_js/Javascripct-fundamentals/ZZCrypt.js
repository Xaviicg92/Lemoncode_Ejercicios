/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */

var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function dictionary (plain,cipher) {
    let original = plain.slice("");
    let encripted = cipher.slice("");
    let dictionary = {};
    for (i = 0; i < encripted.length; i++) {
       dictionary[encripted[i]] = original[i];
       }
       return dictionary;
}


let diccionario = dictionary(plain,cipher);


function decrypt(secret) {
    let phrase = secret.split("");
    console.log(phrase)
    let array_solution = [];
    phrase.forEach(element => {

        let value = diccionario[element];
        if (value === undefined){
            value = " ";  
            array_solution.push(value);

        } else {
            array_solution.push(value);
        }
        

    });
    console.log(array_solution)
    let solution = array_solution.join("")
    return solution;
}

console.log(decrypt(secret));