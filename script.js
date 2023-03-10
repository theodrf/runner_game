const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const obstacles = {
    "0":{
        "name": "Obstacle_0",
        "width": 40,
        "height":40
    },
    "1":{
        "name": "Obstacle_1",
        "width": 70,
        "height":43
    },
    "2":{
        "name": "Obstacle_2",
        "width": 73,
        "height":44
    }
}

let game = new Game();
game.getBestScore();

let player = new Player(120, 350);
let obstacle = new Obstacle(canvas.width, 370, obstacles[0], -8);


document.addEventListener("keydown", function(event){
    if (event.code === "Space"){
        game.over ? location.reload() : player.jump(); 
    }
});
document.addEventListener('click', function(event){
    player.jump();
});

function collision(game){
    if(player.x<obstacle.x +obstacle.obs.width && player.x+50> obstacle.x && player.y<obstacle.y+obstacle.obs.height && player.y+40>obstacle.y){
        game.end();
    }
}

function draw() {
    if (!game.over){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        game.drawBackground(ctx);
        game.drawFloor(ctx);
        game.xfloor+=game.speed;

        if(game.xfloor<=-960){
            game.xfloor=0;
        }

        player.draw(ctx);
        player.update();
        
        obstacle.draw(ctx);
        obstacle.update();
        
        if(obstacle.x <=0){
            let type = Math.floor(Math.random()*3);
            obstacle = new Obstacle(canvas.width, 410-obstacles[type].height, obstacles[type], game.speed);
            game.obstaclecounter+=1;
            if (game.obstaclecounter%3 === 0){
                game.speed-=1;
            }
        }
    
        game.score +=2;
        game.drawScore(ctx);
        game.drawBest(ctx);
    
        collision(game);
        requestAnimationFrame(draw);
    } 
}

draw();