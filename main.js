// Player name
const player1 = "Player 1";
const player2 = "Player 2";
let playeractuel = "";

let score1 = "";
let score2 = "";
let global1 = "";
let global2 = "";
let Dice = "";

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//La variable contient un nombre aléatoire compris entre 1 et 2
let entier = entierAleatoire(1, 2);

function gamestart(){

if (entier > 1) {
    playeractuel = player1;
    alert(player1 + " commence la partie.");
  } 

else {
    playeractuel = player2;
    alert(player2 + " commence la partie.");
  }
 
  do {
    alert("au tour de " + playeractuel)
    
  } while (document.querySelector(".global1").innerHTML === 20|| document.querySelector(".global2").innerHTML === 20);
  alert("winner " + playeractuel)
}


function rolldice() {
    
         Dice = Math.floor(Math.random() * 6) + 1;

        if (Dice > 1) {
            if(playeractuel === player1){
                score1 = Number(score1) + Number(Dice);
                global1 = Number(score1) + Number(global1);
                document.querySelector(".resulta1").innerHTML = score1;
            }
            else{
                score2 = Number(score2) + Number(Dice);
                global2 = Number(score2) + Number(global2);
                document.querySelector(".resulta2").innerHTML = score2;
            }
        }

        else if(Dice === 1) {
            alert("perdu")
            score1 = 0;
            document.querySelector(".resulta1").innerHTML = score1;
            score2 = 0;
            document.querySelector(".resulta2").innerHTML = score2;
            if (playeractuel === player1){
                playeractuel = player2
            }
            else if(playeractuel === player2){
                playeractuel = player1
            }
        }

    }

function hold() {
    if (playeractuel === player1){
        playeractuel = player2;
        score1 = 0;
        document.querySelector(".resulta1").innerHTML = score1;
        score2 = 0;
        document.querySelector(".resulta2").innerHTML = score2;
        document.querySelector(".global1").innerHTML = global1;
    }
    else{
        playeractuel = player1;
        score1 = 0;
        document.querySelector(".resulta1").innerHTML = score1;
        score2 = 0;
        document.querySelector(".resulta2").innerHTML = score2;
        document.querySelector(".global2").innerHTML = global2;
    }
}