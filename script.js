var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

let square_state = {
    x: 130,
    y: 440,
    dx: 0,
    dy: 5,
    jumpDir: 1, // 1 => monte, -1 => descend
    jumpHeight: 100,
    height: 0,
    isJumping: false
}
function drawSquare(){
    ctx.beginPath();
    ctx.rect(square_state.x, square_state.y, 40, 40);
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
    ctx.fill();
    ctx.closePath();
}
function drawFloor(){
    ctx.beginPath();
    ctx.rect(0, 480, 960, 15);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function update_square(){
    if (square_state.isJumping){
        if (square_state.height === 100){
            square_state.jumpDir=-1
        }
        square_state.x = square_state.x - square_state.jumpDir * square_state.dx;
        square_state.y = square_state.y - square_state.jumpDir * square_state.dy;
        square_state.height += square_state.jumpDir * square_state.dy;
        if (square_state.height === 0){
            square_state.isJumping = false;
            square_state.jumpDir = 1
        }
    }
}
let x = canvas.width;
let y = 445;
let dx = -2;
let dy = 0;

document.addEventListener("keydown", function(event){
    if (event.code === "Space"){
        square_state.isJumping = true
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFloor();
    drawSquare();
    update_square();
    
    ctx.beginPath();
    ctx.rect(x, y, 35, 35);
    ctx.fillStyle = "#6BFF33";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();