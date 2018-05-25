function random_spawn(canvas_w, canvas_h, spwn_radius, tower_class){
    //(x - h)**2 + (y - k)**2 = r**2
    //Need to determine the maximum and the minimum y position
    //Max = circle y, minimum = canvas_h
    // y = +/- sqrt(r**2 - (x - h)**2) + k
    let spwn_x = random(canvas_w, canvas_w + spwn_radius);
    let min_y = -sqrt(Math.pow(spwn_radius, 2) - Math.pow(spwn_x - canvas_w, 2)) + canvas_h / 2;
    let spwn_y = random(min_y, canvas_h);
    
    let spwn_dir = determine_spwn_direction(spwn_x, spwn_y, tower_class);
    
    return [new Vector(spwn_x, spwn_y), spwn_dir];
}

function determine_spwn_direction(spwn_x, spwn_y, tower_class){
    let new_x = random(tower_class.location.x - spwn_x, tower_class.location.x + tower_class.radius - spwn_x);
    let new_y = random(tower_class.location.y - spwn_y, tower_class.location.y + tower_class.radius - spwn_y);
    let dir_new = new Vector(new_x, new_y);
    dir_new = dir_new.normalize();
    
    return dir_new;
}