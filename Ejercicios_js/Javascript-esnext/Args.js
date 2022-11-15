/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */

function f(a, { b } = {}, c = 100) {
    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c,  c === arguments[2]);
  }


  
 // Mirar de 
 
  object = {};
  console.log(object)

  f("JS rocks!", { c: "hola" }); 
  //f({ b: "b" });
   // f("JS sucks!", null, 13);


//   function prueba (a, b = {}){
//     console.log(arguments.length);
//     console.log(a, a === arguments[0]);
//     console.log( b, arguments[1]);
//   }

//   prueba (5, 2, 8)