class Obstacle {
    constructor(x,y, obs, dx){
        this.x = x,
        this.y = y,
        this.obs = obs,
        this.dx = dx,
        this.dy = 0,
        this.img = document.createElement('img')
    }

    draw(ctx){
        this.img.src = `./img/${this.obs.name}.png`;
        ctx.drawImage(this.img, this.x, this.y);
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;
    }
}