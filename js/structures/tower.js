//rect(x,y,x_dist,y_dist);
//drawn from top left
//the base of the tower

class Tower{
    constructor(canv_x, canv_y){
        this.radius = 75;
        this.location = new Vector(this.radius / 3, canv_y - this.radius - (this.radius / 3));
        this.weapons = this.create_weapons();
        this.current_weapon = this.weapons[0];
    }
    
    show(){
        fill(255, 0, 0);
        rect(this.location.x, this.location.y, this.radius, this.radius);
    }
    
    create_weapons(){
        let c = new Cannon(this.location, this.radius);
        //let ft = new FlameThrower();
        //let mg = new MachineGun();
        
        return [c];
    }
    
    fire(mouse_click_vec, bullets){
        this.current_weapon.fire(mouse_click_vec, bullets);
    }
    
    change_weapon(){
        
    }
    
    run(mouse_vec, mouse_click_vec){
        this.show();
        this.current_weapon.run(mouse_vec, mouse_click_vec);
    }
    
}