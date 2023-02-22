const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let game = new Game();
let cube = new Cube(130, 440);
let obstacle = new Obstacle(canvas.width, 445);

document.addEventListener("keydown", function(event){
    if (event.code === "Space"){
        cube.jump();
    }
});

function collision(game){
    if(cube.x<obstacle.x +35 && cube.x+40> obstacle.x && cube.y<obstacle.y+35 && cube.y+40>obstacle.y){
        game.end()
    }
}

function draw() {
    if (!game.over){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.drawFloor(ctx)
        cube.draw(ctx);
        cube.update();
        
        obstacle.draw(ctx);
        obstacle.update();
        
        if(obstacle.x ===0){
            obstacle = new Obstacle(canvas.width, 445);
        }
    
        game.score +=2;
        game.drawScore(ctx);
    
        collision(game)
        requestAnimationFrame(draw);
    } 
}

draw();