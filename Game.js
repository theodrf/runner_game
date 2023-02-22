class Game {
    constructor(){
        this.score = 0,
        this.over = false
    }
    
    drawFloor(ctx){
        ctx.beginPath();
        ctx.rect(0, 480, 960, 15);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }
    
    drawScore(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("Score: "+this.score, 8, 20);
    }
    
    end() {
        ctx.font = "36px Arial";
        ctx.fillStyle = "#D41A28";
        ctx.fillText(" Perdu ! Score: "+game.score, 200, 100);
        this.over = true;
    }
}