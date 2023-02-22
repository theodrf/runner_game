const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let game = new Game();
let player = new Player(120, 430);
let obstacle = new Obstacle(canvas.width, 445);

document.addEventListener("keydown", function(event){
    if (event.code === "Space"){
        player.jump();
    }
});

function collision(game){
    if(player.x<obstacle.x +35 && player.x+40> obstacle.x && player.y<obstacle.y+35 && player.y+40>obstacle.y){
        game.end()
    }
}

function draw() {
    if (!game.over){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.drawFloor(ctx)
        player.draw(ctx);
        player.update();
        
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