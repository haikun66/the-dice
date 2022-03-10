// Player name
const player1 = "Player 1";
const player2 = "Player 2";
const endgame =  document.getElementById('holld');
let playeractuel = "";
let score1 = "";
let score2 = "";
let global1 = "";
let global2 = "";
let Dice = "";
let entier = entierAleatoire(1, 2);

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gamestart(){

if (entier > 1) {
    playeractuel = player1;
    alert(player1 + " commence la partie.");
  } 

else {
    playeractuel = player2;
    alert(player2 + " commence la partie.");
  }

}
function newgame(){
    score1 = 0;
    document.querySelector(".resulta1").innerHTML = Number(score1);
    score2 = 0;
    document.querySelector(".resulta2").innerHTML = Number(score2);
    global1 = 0;
    document.querySelector(".global1").innerHTML = Number(global1);
    global2 = 0;
    document.querySelector(".global2").innerHTML = Number(global2);
    document.getElementById('rolll').disabled = false;
    document.getElementById('holld').disabled = false;
    document.getElementById('point1').style.display="none";
    document.getElementById('point2').style.display="none";
    alert(playeractuel + " commence.")
}

function rolldice() {
    Dice = Math.floor(Math.random() * 6) + 1;
    let imgdice = document.getElementById("dee");
    imgdice.src = "image/dice" + Dice + ".png";
        if (Dice > 1) {
            if(playeractuel === player1){
                score1 = Number(score1) + Number(Dice); //score1 prend la valeur de dice.
                document.querySelector(".resulta1").innerHTML = Number(score1); //score1 et afficher dans l'html
            }
                else{
                    score2 = Number(score2) + Number(Dice);
                    document.querySelector(".resulta2").innerHTML = Number(score2);
                }
        }
            else if(Dice === 1) {
                score1 = 0;
                document.querySelector(".resulta1").innerHTML = Number(score1);
                score2 = 0;
                document.querySelector(".resulta2").innerHTML = Number(score2);

                if (playeractuel === player1){
                    playeractuel = player2
                    document.getElementById('point2').style.display="block";
                    document.getElementById('point1').style.display="none";
                }
                    else if(playeractuel === player2){
                        playeractuel = player1
                        document.getElementById('point1').style.display="block";
                        document.getElementById('point2').style.display="none";
                    }
            }
        

    }

function hold() {
    if (playeractuel === player1){
        document.getElementById('point2').style.display="block";
        document.getElementById('point1').style.display="none";
        global1 = Number(global1) + Number(score1); //global1 prend la valeur de score1.
        score1 = 0;
        document.querySelector(".resulta1").innerHTML = score1;
        score2 = 0;
        document.querySelector(".resulta2").innerHTML = score2;
        document.querySelector(".global1").innerHTML = global1;
        
    }
    else{
        document.getElementById('point1').style.display="block";
        document.getElementById('point2').style.display="none";
        global2 = Number(global2) + Number(score2); //global1 prend la valeur de score2.
        score1 = 0;
        document.querySelector(".resulta1").innerHTML = score1;
        score2 = 0;
        document.querySelector(".resulta2").innerHTML = score2;
        document.querySelector(".global2").innerHTML = global2;
    }
}

endgame.addEventListener('click', function(){
    if(global1 >= 10 || global2 >= 10){
        alert("Winner " + playeractuel)
        document.getElementById('rolll').disabled = true;
        document.getElementById('holld').disabled = true;
    }
    else{
        if(playeractuel===1){
            playeractuel = player2;
        }
        else{
            playeractuel = player1;
        }
    }
})
