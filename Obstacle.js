class Obstacle {
    constructor(x,y){
        this.x = x,
        this.y = y,
        this.dx = -8,
        this.dy = 0
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.x, this.y, 35, 35);
        ctx.fillStyle = "#6BFF33";
        ctx.fill();
        ctx.closePath();
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;
    }
}