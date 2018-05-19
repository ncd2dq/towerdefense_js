class CannonBullets{
    constructor(weapon_tip, weapon_facing_vec){
        this.radius = 12;
        this.location = weapon_tip;
        this.velocity = weapon_facing_vec;
        this.speed = 15;
        this.crashed = false;
        
        this.dmg = 8;
    }
    
    show(){
        fill(0,0,0);
        ellipse(this.location.x, this.location.y, this.radius * 2, this.radius * 2); //drawn from center
    }
    
    update(){
        this.location = this.location.add(this.velocity.mult(this.speed));
    }
    
    run(){
        this.update();
        this.show();
    }
    
}