//This file provides all the game logic for sending waves at the tower
class WaveController{
    constructor(){
        this.wave = 0;
        this.initial_enemies = 5;
        
        this.break_time = 50;
    }
    
    
    spawn_diver(){
        
        
    }
    
    spawn_bomber(){
        
        
    }
    
    spawn_simple(){
        
        
    }
    
    spawn_flock(){
        
        
    }
    
    
    create_wave(enemy_list){
        if(enemy_list.length == 0){
            console.log("activated");
            if(frameCount % this.break_time == 0){
                enemy_list.push(new SimpleEnemy(t));
                console.log("spawning");
            }
        }
        
    }
    
    run(enemy_list){
        this.create_wave(enemy_list);
    }
    
}

//determines a random spawn location for diver enemies (enemies that dive into tower)
function spawn_location_diver(){
    
    
    
}

//determines a random spawn location for enemies that drop bombs
function spawn_location_bomber(){
    
}


//frameCount