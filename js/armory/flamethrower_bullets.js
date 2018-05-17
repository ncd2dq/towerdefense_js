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
        this.lifespan = 255;
        this.evap_rate = 4;
        
        this.dmg = 1;

    }
    
    show(){
        strokeWeight(0);
        fill(this.color, 0, 0, this.lifespan);
        ellipse(this.location.x, this.location.y, this.radius * 2, this.radius * 2); //drawn from 
        strokeWeight(1);
    }
    
    update(){
        this.lifespan -= this.evap_rate;
        this.location = this.location.add(this.velocity.mult(this.speed));
        if(this.lifespan <= 0){
            this.crashed = true; 
        }
    }
    
    run(){
        this.update();
        this.show();
    }
    
}