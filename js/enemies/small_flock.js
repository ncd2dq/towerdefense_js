class Flock{
    constructor(){
        this.location = new Vector(100, 100);
        this.height = 20;
        this.width = 8;
        this.points_list = this.create_vertices(this.location);
        this.velocity = new Vector(0, 0);
        this.max_force = 5;
        
    }
        
    create_vertices(location){
        //tip, BL, BR, center
        let tip = [location.x, location.y];
        let BL = [tip[0] - (this.width / 2), tip[1] + this.height];
        let BR = [BL[0] + this.width, BL[1]];
        let center = [tip[0], tip[1] + (this.height / 2)];
        
        return [tip, BL, BR, center];
    }
    
    update(){
        for(let i = 0; i < this.points_list.length; i++){
            this.points_list[i][0] += this.velocity.x;
            this.points_list[i][1] += this.velocity.y;
        }
        
        this.location.x += this.velocity.x;
        this.location.y += this.velocity.y;
    }
    
    applyForce(force){
        this.velocity = this.velocity.add(force);
        this.velocity = this.velocity.limit(this.max_force);
    }
    
    show(){
        color(255, 255, 255);
        triangle(this.points_list[0][0], this.points_list[0][1],
                 this.points_list[1][0], this.points_list[1][1],
                 this.points_list[2][0], this.points_list[2][1]
                )
    }
    
    rotation(){

    }
    
    run(){
        this.update();
        this.show();
    }
    
}