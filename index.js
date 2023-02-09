//Testing the linking of index.js

// Generate Random Number

var dice1 = Math.random();
var dice2 = Math.random();

// Scale the random numebr to give value between 0-6
dice1 = Math.floor(dice1*6) +1;
dice2 = Math.floor(dice2*6) +1;

// Using that number, change the src of the image in the player divs
dice1src = "images/dice" + dice1 + ".png";
dice2src = "images/dice" + dice2 + ".png";

document.getElementsByClassName("dice1")[0].setAttribute("src", dice1src);
document.getElementsByClassName("dice2")[0].setAttribute("src", dice2src);

if(dice1 === dice2){
  document.getElementsByTagName("h1")[0].innerText = "Draw";
}
else if(dice1 > dice2){
  document.getElementsByTagName("h1")[0].innerText = "Player 1 WINS";
}

else{
 document.getElementsByTagName("h1")[0].innerText = "Player 2 WINS";
}
