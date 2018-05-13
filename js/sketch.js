let Canvas_Width = 1600;
let Canvas_Height = 800;

let p = new Flock();
let obstacles = [];


function setup() {
    createCanvas(Canvas_Width, Canvas_Height);
}


function draw() {
    background(100, 100, 125);
    p.run();
    
    if(mouseX){
        let m_vector = new Vector(mouseX, mouseY);
        
        let steering = steeringForce(p, m_vector);
        p.applyForce(steering);
        
        if(obstacles.length != 0){
            for(let i = 0; i < obstacles.length; i++){
                let avoid = avoidForce(p, obstacles[0]);
                avoid = avoid.mult(0.25);
                p.applyForce(avoid);
                ellipse(obstacles[i].location.x, obstacles[i].location.y, 10, 10);                        
            }
        }
    }
    
    
}


// User input
function keyPressed(){
    if (keyCode === LEFT_ARROW){

    } else if (keyCode === RIGHT_ARROW){

    } else if (keyCode === DOWN_ARROW){

    } else if (keyCode === UP_ARROW){
        
    } else if (keyCode == 32){ //the spacebar

    } else if (keyCode == 80){ //the 'p' key

    }
}

function keyReleased(){
    if (keyCode === LEFT_ARROW){

    } else if (keyCode === RIGHT_ARROW){

    } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW){

    } else if (keyCode == 32){

    }
}

//function mouseDragged(){
//    console.log(mouseX, mouseY);
//}

function mousePressed(){
    obstacles.push({location: new Vector(mouseX, mouseY)});
}

function mouseReleased(){
    
}