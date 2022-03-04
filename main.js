// Player name
var player1 = "Player 1";
var player2 = "Player 2";
var playeractuel = "";

//fonction debut du jeux
function gamestart(){

if (nb_aleat(2) > 1) {
    playeractuel = player1;
    alert(player1 + " commence la partie.");
  } 

else {
    playeractuel = player2;
    alert(player2 + " commence la partie.");
  }
}
function rolldice() {
    
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        if (randomNumber > 1) {
            alert("gagner");
        }

        else if (randomNumber === 1) {
            alert("perdu")
        }

    }