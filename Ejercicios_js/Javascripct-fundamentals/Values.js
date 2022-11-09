function values(object) {

  var properties = [];
  for (const property in object) {
    if (typeof object[property] === "function"){

    }
    else {
      properties.push(object[property]);
    }
    
  }
  return properties;
}




// function values(obj) {
//   var object = Object.values(obj);
//   return object;
// }

function Person(name, edad) {
  this.name = name;
  this.edad = edad;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John", 25);
console.log(john);
console.log(values(john));