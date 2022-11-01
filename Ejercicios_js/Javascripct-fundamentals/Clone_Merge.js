// APARTADO A

function clone(source) {
    var clone;
    if (typeof source === "object") {
        clone = Object.assign({}, source);
        return clone;
    } else {
        return "No has introducido un objeto";
    }
  }

var Persona = {
    nombre: "Javier",
    apellido: "Cambón",
    pais: "España"
}

//console.log(clone(Persona));



// APARTADO B

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    var principalObj = clone(source);
    var merge = Object.assign(principalObj, target);
    return merge;
  }

 var resultado = merge (b,a);
 console.log (resultado);
