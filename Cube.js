class Cube {
    constructor(x, y){
        this.x = x,
        this.y = y,
        this.dx = 0,
        this.dy = 5,
        this.jumpDir = 1, // 1 => monte, -1 => descend
        this.jumpHeight = 100,
        this.height = 0,
        this.isJumping = false
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.x, this.y, 40, 40);
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fill();
        ctx.closePath();
    }

    update(){
        if (this.isJumping){
            if (this.height === 100){
                this.jumpDir=-1
            }
            this.x = this.x - this.jumpDir * this.dx;
            this.y = this.y - this.jumpDir * this.dy;
            this.height += this.jumpDir * this.dy;
            if (this.height === 0){
                this.isJumping = false;
                this.jumpDir = 1
            }
        }
    }

    jump(){
        if(!this.isJumping){
            this.isJumping = true
        }
    }
}
