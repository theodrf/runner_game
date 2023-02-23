class Game {
    constructor(){
        this.score = 0,
        this.over = false
        this.img = document.createElement('img'),
        this.background = document.createElement("img")
        this.best = 0
    }

    getBestScore(){
        if(!localStorage.getItem('best')){
            this.best = 0
        } else {
            this.best = localStorage.getItem('best')
        }
    }
    
    drawBackground(ctx){
        this.background.src = "./img/BG.png";
        ctx.drawImage(this.background,0,0);
    }
    
    drawFloor(ctx){
        this.img.src= "./img/Floor.png";
        ctx.drawImage(this.img, 0, 410);
    }
    
    drawScore(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("Score: "+this.score, 8, 20);
    }
    
    drawBest(ctx){
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("Best: "+this.best, 8, 40);
    }
    
    end() {
        ctx.font = "36px Arial";
        ctx.fillStyle = "#D41A28";
        ctx.fillText(" Perdu ! Score: "+this.score, 200, 100);
        this.over = true;
        if (this.score > this.best){
            localStorage.setItem("best", this.score)
        }
    }
}