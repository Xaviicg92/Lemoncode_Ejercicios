// APARTADO A
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

//console.log(user === clonedUser); // false

// function isEqual(a, b) {
//     if (a.hasOwnProperty("name", "age") && b.hasOwnProperty("name", "age")) {
//         var nameA;
//         var nameB;
//         var ageA;
//         var ageB;
//         nameA = a.name;
//         nameB = b.name;
//         ageA = a.age;
//         ageB = b.age;

//         if (nameA === nameB && ageA === ageB){
//             debugger;
//             return true;
//         }

//         else {
//             return false;
//         }
//     }

//     else {
//         return false;
//     }
// }


function isEqual(a, b) {
    for (const property in a) {
        if (b.hasOwnProperty(property)) {
            if (a[property] === b[property]) {
                
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



//console.log(isEqual(user, clonedUser)); // true


// APARTADO B

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29621 },
    friends: ["Juan"],
  };
var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };

  
function isDeepEqual(a, b) {
    for (const property in a) {
        if (b.hasOwnProperty(property)) {
            if (typeof b[property] === "object" ) {
                if (isEqual(b[property], a[property])){

                } else {
                    return false
                }
            } else if (isEqual(b[property], a[property])) {
                
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
  
  console.log(isDeepEqual(user, clonedUser)); // true