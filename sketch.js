
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var gSlider;
var ground;
var engine;
var world;
var boxes = [];

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    ground = new Ground(400,390,400,20); 

}

function mousePressed() {
    if (mouseY < 350) {
       box = new Box(100,200,70,70);   
    }
}
 
function draw() {
    Engine.update(engine);
    background(0);
    ground.display();
    box.display();
    var fVal = gSlider.value();
 
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    noStroke();
    fill(170);
    strokeWeight(4);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 10);
    fill(255);
    textSize(15);
    text("Gravity " + fVal, 160, 381);
}
 
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(0, 0, this.width, this.height);
        pop();
    }
