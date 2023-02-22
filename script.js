var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

let cube = new Cube(130, 440);

function drawFloor(){
    ctx.beginPath();
    ctx.rect(0, 480, 960, 15);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

let x = canvas.width;
let y = 445;
let dx = -2;
let dy = 0;

document.addEventListener("keydown", function(event){
    if (event.code === "Space"){
        cube.jump();
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFloor();
    cube.draw(ctx);
    cube.update();
    
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