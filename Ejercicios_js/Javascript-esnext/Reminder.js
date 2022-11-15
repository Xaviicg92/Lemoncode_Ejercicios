class Reminder {
    constructor(text) {
      this.text = text;
    }
  
    remindMe(delay) {
      
      setTimeout(() => {
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
      }, delay * 1000);
    }
  }

  let myReminder = new Reminder("hola");
  myReminder.remindMe(5);