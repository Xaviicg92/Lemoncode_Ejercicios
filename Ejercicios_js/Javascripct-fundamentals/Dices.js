/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */


// function tamaño_dado(num) {
//     var dado = []
//     for (i = 1; i <= num; i ++) {
//         dado.push(i);
//     }
//     return dado;
// }


function numeros_aleatorios(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function tirar_dados() {
    var dado1;
    var dado2;

    return {
        
        tirar: function () {
            if (dado1 && dado2 ) {
                console.log("Debes resetear los dados antes de tirar");
                

            } else {
                dado1 = numeros_aleatorios(1,6);
                console.log ("El resultado del primer lanzamiento es : " + dado1);
                dado2 = numeros_aleatorios(1,6);
                console.log ("El resultado del segundo lanzamiento es : " + dado2);
                var total = dado1 + dado2;

                if (dado1 === 6 && dado2 === 6) {
                    console.log ("Enhorabuena tiene usted un premio. Su resultado total es :" + total);

                } else {
                    console.log ("Su resultado total es : " + total);
                }
            }
            
        },

        recoger: function() {
            dado1 = undefined;
            dado2 = undefined;

            console.log ("Has recogido los dados")
        }
    }
}

var dados = tirar_dados();
dados.tirar();
dados.tirar();
dados.recoger();
dados.tirar();

console.log(dados);


