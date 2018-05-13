class Cannon{
    constructor(t_loc, t_radi){
        this.radius = t_radi * 4 / 5;
        this.location = new Vector(t_loc.x + t_radi / 2, t_loc.y + t_radi / 2);
        this.cool_down_standard = 10;
        this.cool_down = 0;
        this.ready = true;
        this.facing = new Vector(0.5, -0.5);
        this.cannon_length = 50;
    }
    
    cannon_rotate(mouse_vec){
        //vec = Vector(mouseX, mouseY)
        let pointer = mouse_vec.sub(this.location);
        pointer = pointer.normalize().mult(this.cannon_length);
        pointer = pointer.add(this.location);
        this.facing = pointer;
    }
    
    fire(mouse_click_vec, bullets){
        let dir = this.facing.sub(this.location).normalize();
        let new_bullet = new CannonBullets(this.facing, dir);
        bullets.push(new_bullet);
    }
    
    
    show(){
        fill(0, 255, 0);
        
        //draws from the center point
        //base unit of cannon
        ellipse(this.location.x, this.location.y, this.radius, this.radius);
        
        //tube part of cannon
        strokeWeight(5);
        line(this.location.x, this.location.y, this.facing.x, this.facing.y);
        strokeWeight(1);
    }
    
    run(mouse_vec, mouse_click_vec, bullets){
        this.show();
        this.cannon_rotate(mouse_vec);
    }
    
    
}
