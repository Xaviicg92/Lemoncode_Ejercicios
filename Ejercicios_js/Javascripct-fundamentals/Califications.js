const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };

  function printAverage(classResults) {
      let results = Object.values(classResults);
      let sumatorio = 0;
      for (let i in results) {
        sumatorio += results[i];
      }
     
      let media = sumatorio/results.length;

      if (media === 10) {
        console.log("La media de la clase es: Matrícula de Honor");
        
      } else if (9 <= media && media< 10) {
        console.log("La media de la clase es: Sobresaliente");
        
      } else if (7 <= media && media< 9) {
        console.log("La media de la clase es: Notable");
        
      } else if (6 <= media && media< 7) {
        console.log("La media de la clase es: Bien");
        
      } else if (5 <= media && media< 6) {
        console.log("La media de la clase es: Suficiente");
        
      } else if (4 <= media && media< 5) {
        console.log("La media de la clase es: Insuficiente");
        
      } else if ( media < 4) {
        console.log("La media de la clase es: Muy deficiente");
        
      } else {
        console.log("Ha habido un error corrigiendo");
      }
  
  }

printAverage(eso2o);
