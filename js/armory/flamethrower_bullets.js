class FlameThrowerBullets{
    constructor(weapon_tip, weapon_facing_vec){
        this.radius = 5;
        this.location = weapon_tip;
        this.velocity = weapon_facing_vec;
        this.speed = 3;
        this.color = random(65,255);
        this.angle_offset = int(random(-65, 65));
        this.velocity = rotate_this(this.velocity, this.angle_offset);
        this.crashed = false;
        this.gravity = new Vector(0.005, 0.03);

    }
    
    show(){
        fill(this.color, 0, 0);
        ellipse(this.location.x, this.location.y, this.radius * 2, this.radius * 2); //drawn from 
    }
    
    update(){
        this.velocity = this.velocity.add(this.gravity);
        this.location = this.location.add(this.velocity.mult(this.speed));
    }
    
    run(){
        this.update();
        this.show();
    }
    
}