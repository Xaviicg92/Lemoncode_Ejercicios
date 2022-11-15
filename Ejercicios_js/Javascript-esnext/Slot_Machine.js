class SlothMachine {
     constructor(){
        this.coin = 0;
     }
     play = () => {
        this.coin++;
        let array_bool = [];
        for (let i = 0; i < 3; i++){
            array_bool.push(Math.random() < 0.5)
        }
        for (let i = 0; i < array_bool.length; i++){
            if (array_bool[i] === true){

            }else {
                return console.log("Good luck next time!!")
            }
        }
        let coin = this.coin;
        this.coin = 0;
        return console.log("Congratulations you won: " + coin + " coins")
        

     }
  }


  

  
  const machine1 = new SlothMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"
  