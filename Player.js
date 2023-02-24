class Player {
    constructor(x, y){
        this.x = x,
        this.y = y,
        this.dx = 0,
        this.dy = 10,
        this.jumpDir = 1,
        this.jumpHeight = 100,
        this.height = 0,
        this.isJumping = false,
        this.img = document.createElement('img'),
        this.compteur = 0
    }

    draw(ctx){
        this.img.src = `./img/Run__00${this.compteur % 9}.png`;
        ctx.drawImage(this.img, this.x, this.y, 60, 60);
        this.compteur++;
    }

    update(){
        if (this.isJumping){
            if (this.height === 100){
                this.jumpDir=-0.5;
            }
            this.x = this.x - this.jumpDir * this.dx;
            this.y = this.y - this.jumpDir * this.dy;
            this.height += this.jumpDir * this.dy;
            if (this.height === 0){
                this.isJumping = false;
                this.jumpDir = 1;
            }
        }
    }

    jump(){
        if(!this.isJumping){
            this.isJumping = true;
        }
    }
}
