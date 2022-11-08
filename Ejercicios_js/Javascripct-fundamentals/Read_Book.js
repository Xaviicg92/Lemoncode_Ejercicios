function isBookRead(books, titleToSearch) {
    for (let index = 0; index < books.length; index++) {
        if (books[index].title === titleToSearch){
            let bool = (books[index].isRead === true) ? true : false;
            return bool;
        }
    
    }

    return false;
    
  }
  
  // Ejemplo:
  var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


