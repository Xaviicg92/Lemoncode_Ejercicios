function showPrimes(from, to) {

   for (i = from; i <= to; i++) {
    debugger;
    
    if (prime(i) === true){
        debugger;
        console.log (i + " is PRIME");

    } else {

        console.log (i + " is not prime")
    } 
    
   }


}

  showPrimes(5,13);

function prime(numero) {
    if (numero === 1 ) {
        return false;
    } else {
        for (i = 2; i < numero; i++){
            if (numero % i === 0){
                return false
            }
        }
        
    }

    return true;
}

var i = 2;

console.log(prime (i));

 
   