class Game{
    constructor(){
        this.level = 0;
        this.score = 0;
        this.end_text = "Your Tower Was Destroyed!";
        this.instruction1 = "--Press 'P' to play or pause at anytime";
        this.instruction2 = "--Press 'SpaceBar' to change tower weapon";
        this.instruction3 = "--Left-Click to fire or place a structure";
        this.instruction4 = "--Aim with the mouse cursor";
        
        this.paused = true;
        
        this.size = 25;
        this.line_offset = this.size + 5;
    }
    
    show_gun_cool_downs(weapons_list){
        textSize(this.size);
        fill(0, 0, 0);
        text("Cannon: " + weapons_list[0].cool_down_time, Canvas_Width / 6 , Canvas_Height - this.size / 2);
        text("FlameThrower: " + (weapons_list[1].fired_max - weapons_list[1].fired) + " | " + weapons_list[1].cool_down_time, Canvas_Width * 2 / 6 , Canvas_Height - this.size / 2);
        text("MachineGun: " + weapons_list[2].cool_down_time, Canvas_Width * 4 / 7 , Canvas_Height - this.size / 2);
    }
    
    
    show(){
        //display level
        //display score
    }
    
    addPoint(){
        this.score++;
    }
    
    nextLevel(){
        this.level++;
    }
    
    gameOver(){
        
    }
    
    show_instructions(){
        textSize(this.size);
        fill(255, 0, 0);
        text(this.instruction1, Canvas_Width / 3, Canvas_Height / 2);
        text(this.instruction2, Canvas_Width / 3, Canvas_Height / 2 + this.line_offset);
        text(this.instruction3, Canvas_Width / 3, Canvas_Height / 2 + this.line_offset * 2);
        text(this.instruction4, Canvas_Width / 3, Canvas_Height / 2 + this.line_offset * 3);
    }
    
    run(weapons_list){
        this.show_gun_cool_downs(weapons_list);
    }
    
    pause(){
        if(this.paused){
            background(0, 0, 0, 100);
            this.show_instructions();
            noLoop();
            
        } else {
            loop();
        }
    }
    
    
    
}