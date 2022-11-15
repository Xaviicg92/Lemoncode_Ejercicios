/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */

const getPlayersOrder = (players, turns) => {
    const new_players =  [...players];
    
    for (i = 0; i < players.length; i++){
        
        if ((i + turns) >= players.length){
            
            [new_players[i], new_players[(i+turns)-players.length]] = [new_players[(i+turns) - players.length], new_players[i]];
        }else {
            [new_players[i], new_players[i+turns]] = [new_players[i+turns], new_players[i]];
        }
        
        
    }
    
        

    
    return new_players;
    
  };

  
  
  // Un ejemplo:
  const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
  console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
