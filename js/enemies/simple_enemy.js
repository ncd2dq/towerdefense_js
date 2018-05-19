class SimpleEnemy{
    constructor(location, target_vector){
        this.location = location;
        this.speed = 5;
        this.velocity = target_vector.sub(this.location).normalize();
        this.velocity = this.velocity.mult(this.speed)
        this.radius = 5
    }
    
    update(){
        this.location = this.location.add(this.velocity);
    }
    
    show(){
        fill(100,25,100);
        ellipse(this.location.x, this.location.y, this.radius, this.radius);
    }
    
    run(){
        this.update();
        this.show();
    }
    
    
}