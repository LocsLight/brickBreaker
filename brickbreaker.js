const canvas1 = document.getElementById("game1Canvas");
const context = canvas1.getContext("2d");

//variables des bricks
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks=[];
for(let c=0; c<brickColumnCount; c++){
    bricks[c]=[];
    for(let r=0; r<brickRowCount; r++){
        bricks[c][r] = {x: 0, y:0};
    }
}

//variables de position
let x = canvas1.width/2;
let y = canvas1.height-30;

//variables de déplacement de la balle
let dx = 1.5;
let dy = -1.5;
let ballRadius = 10;

//variable de la pagaie
let paddle1Height = 10
let paddle1Width = 75
let paddle1X = (canvas1.width-paddle1Width)/2

//variables des commande
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed =true
    }
    if(e.keyCode == 37){
        leftPressed =true
    }
}

function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed =false
    }
    if(e.keyCode == 37){
        leftPressed =false
    }
}
function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            const brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            const brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = 0;
            bricks[c][r].y = 0;
            context.beginPath();
            context.rect(brickX, brickY, brickWidth, brickHeight);
            context.fillStyle = "#0095DD";
            context.fill();
            context.closePath();
        }
    }
}
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
    drawBricks();
    drawPaddle();
    drawBall();
    // make the ball bounce on the side walls
    if(x + dx > canvas1.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // change la direction de la balle quand elle tape un mur ou la pagais
    if(y + dy < ballRadius) {
    dy = -dy;
    }else if(y + dy > canvas1.height - ballRadius){
        if(x > paddle1X && x < paddle1X + paddle1Width){
            dy = -dy
        }else{
        alert("GAME OVER");
        document.location.reload();
        }
    }
    //mouvement du paddle  
    if(rightPressed && paddle1X < canvas1.width-paddle1Width) {
        paddle1X += 5;
    }
    else if(leftPressed && paddle1X > 0) {
        paddle1X -= 5;
    }
    x+= dx;
    y+= dy;
}
setInterval(draw,10);

