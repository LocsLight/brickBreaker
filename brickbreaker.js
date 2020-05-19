const canvas1 = document.getElementById("game1Canvas");
const context = canvas1.getContext("2d");

//variables de position
let x = canvas1.width/2;
let y = canvas1.height-30;

//variables de déplacement de la balle
let dx = 1;
let dy = -1;
let ballRadius = 10;

//variable de la pagaie
let paddle1Height = 10
let paddle1Width = 75
let paddle1X = (canvas1.width-paddle1Width)/2

//variables des commande
let rightPressed = false;
let leftPresses = false;


function drawBall(){
    context.beginPath();
    context.arc(x,y,ballRadius,0,Math.PI*2);
    context.fillStyle = "rgb(184, 120, 201)";
    context.fill();
    context.closePath();
}
function drawPaddle(){
    context.beginPath();
    context.rect(paddle1X,canvas1.height-paddle1Height,paddle1Width,paddle1Height);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}
function draw(){
    context.clearRect(0, 0, canvas1.width, canvas1.height);
    drawPaddle()
    drawBall();
    if(x + dx > canvas1.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas1.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
    }
    x+= dx;
    y+= dy;
}
document.addEventListener("keydown",keyDownHandler,false)
document.addEventListener()
setInterval(draw,10);