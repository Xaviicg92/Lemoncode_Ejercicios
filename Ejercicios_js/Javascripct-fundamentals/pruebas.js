var user = { name: "María", age: 31 };
var clonedUser = { name: "María", age: 30 };

function isEqual(a, b) {
    for (const prop in a) {
        if (b.hasOwnProperty(prop)) {
            if (a[prop] === b[prop]) {
                console.log("hola");
                return true;
               
            } else {
                return false;
            }
        }
        else {
            return false;
        }
        
    }
    return true;
}

console.log(isEqual(user, clonedUser));