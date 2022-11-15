// const fib = n => {
//     let array = [];
//     for (i = 0; i <= n; i++){
        
//         if (i === 0){
//             array[0] = 0;
//         }else if (i === 1){
//             array[1] = 1;
//         }else {
//             array[i] = array[i-1] + array[i-2];
//         }
        
//         debugger;

//     }

//     return array;
//   };

const fib = n => { // MIRAR BIEN, DEVOLVER UN NUMERO SOLO
     anterior = 0;
     actual = 1;
     
    for (i = 2; i <= n; i++){
       array.push(array[i-1] + array[i-2]);
       
    }
    
    return array;
}

  console.log(fib(30));