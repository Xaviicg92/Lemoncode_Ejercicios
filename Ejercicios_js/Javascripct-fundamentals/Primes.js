/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */

 function prime(numero) {
    if (numero === 1 ) {
        return false;
    } else {
        for (var i = 2; i < numero; i++){
            if (numero % i === 0){
                return false
            }
        }
        
    }

    return true;
}





function showPrimes(from, to) {

   for ( var i = from; i <= to; i++) {
    
    
    if (prime(i) === true){
        
        console.log (i + " is PRIME");

    } else {

        console.log (i + " is not prime")
    } 
    
   }


}

  showPrimes(5,13);





 
   