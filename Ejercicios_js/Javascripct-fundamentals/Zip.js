

  function zipObject(keys, values) {
    let object = {};
    console.log (object);
    for (i = 0; i < keys.length; i++) {
        object[keys[i]] = values[i];
        //console.log ("hola")
        if (values[i] === undefined) {
            delete object[keys[i]]
        }
    }
    return object;
  }
  
  // Ejemplo
  console.log(zipObject(["spanish", "english", "french"], ["hola", "hi"])); // {spanish: "hola", english: "hi", french: "salut"}


