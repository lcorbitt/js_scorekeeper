var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2"); 
var p1Score = 0;
var p2Score = 0;
var p1Total = document.querySelector("#p1Total");
var p2Total = document.querySelector("#p2Total");
var playingTo = document.querySelector("p span");
var numInput = document.querySelector("input");
var winningScore = numInput.value;
var resetButton = document.getElementById("reset");
var gameOver = false;


p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Total.classList.toggle("green");
            gameOver = true;
        }
        p1Total.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score == winningScore){
            console.log("GAME OVER");
            gameOver = true;
            p2Total.classList.toggle("green");
        }
        p2Total.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Total.textContent = 0;
    p2Total.textContent = 0;
    p1Total.classList.remove("green");
    p2Total.classList.remove("green");
    gameOver = false;
};

numInput.addEventListener("change", function(){
    playingTo.textContent = numInput.value;
    winningScore = Number(this.value);
    reset();
});