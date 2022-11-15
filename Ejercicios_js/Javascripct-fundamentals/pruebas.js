
let a = 5;
let b = 2;

// {
//     try{
//         console.log(b)
//     } catch {console.log(error)}

//     let b = 6;
// }

let c = () => {
    console.log(a);
    var a = 5;
    let b = 6;
    console.log(a, b);
  };

  console.log(c())