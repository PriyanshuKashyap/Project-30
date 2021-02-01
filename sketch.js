const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world, ground, stand1, stand2, block1A, block2A, block3A, block4A, block5A, block6A, block7A, block8A, block9A, block10A, block11A, block12A, block13A, block14A, block15A, block16A;
var block1B, block2B, block3B, block4B, block5B, block6B, block7B, block8B, block9B;
var polygon, polygonImg, constraint;

function preload() {
    polygonImg = loadImage("polygon.png");
}
function setup() {
    createCanvas(900, 530);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height - 10, width, 20);
    stand1 = new Ground(365, 365, 270, 13);
    stand2 = new Ground(705, 255, 200, 13);

    block1A = new Box(270, 350, 30, 40, 141, 209, 241);
    block2A = new Box(295, 350, 30, 40, 141, 209, 241);
    block3A = new Box(320, 350, 30, 40, 141, 209, 241);
    block4A = new Box(345, 350, 30, 40, 141, 209, 241);
    block5A = new Box(370, 350, 30, 40, 141, 209, 241);
    block6A = new Box(395, 350, 35, 40, 141, 209, 241);
    block7A = new Box(420, 350, 35, 40, 141, 209, 241);

    block8A = new Box(295, 325, 30, 40, 255, 192, 204);
    block9A = new Box(320, 325, 30, 40, 255, 192, 204);
    block10A = new Box(345, 325, 30, 40, 255, 192, 204);
    block11A = new Box(370, 325, 30, 40, 255, 192, 204);
    block12A = new Box(395, 325, 35, 40, 255, 192, 204);

    block13A = new Box(320, 300, 30, 40, 64, 224, 208);
    block14A = new Box(345, 300, 30, 40, 64, 224, 208);
    block15A = new Box(370, 300, 30, 40, 64, 224, 208);
    block16A = new Box(345, 275, 30, 40, 150, 150, 150);

    
    block1B = new Box(645, 240, 30, 40, 141, 209, 241);
    block2B = new Box(670, 240, 30, 40, 141, 209, 241);
    block3B = new Box(695, 240, 30, 40, 141, 209, 241);
    block4B = new Box(720, 240, 30, 40, 141, 209, 241);
    block5B = new Box(745, 240, 30, 40, 141, 209, 241);

    block6B = new Box(670, 215, 30, 40, 64, 224, 208);
    block7B = new Box(695, 215, 30, 40, 64, 224, 208);
    block8B = new Box(720, 215, 30, 40, 64, 224, 208);

    block9B = new Box(695, 190, 30, 40, 255, 192, 204);

    polygon = Bodies.circle(40, 260, 50, {restitution: 0});
    World.add(world, polygon);
    polygon.isStatic = true;
    constraint = new SlingShot(polygon, {x: 55, y: 280});
    //Matter.Body.setStatic(polygon, true);

    /*
    for (var i = 0; i <= 16; i++) {
        list[i] = new Box()
    }
     */
    Engine.run(engine);
}

function draw() {
    background(0);
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
    block1A.display();
    block2A.display();
    block3A.display();
    block4A.display();
    block5A.display();
    block6A.display();
    block7A.display();
    block8A.display();
    block9A.display();
    block10A.display();
    block11A.display();
    block12A.display();
    block13A.display();
    block14A.display();
    block15A.display();
    block16A.display();
    block1B.display();
    block2B.display();
    block3B.display();
    block4B.display();
    block5B.display();
    block6B.display();
    block7B.display();
    block8B.display();
    block9B.display();
    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 50, 50);
    constraint.display();
    drawSprites();
}

function mouseDragged() {
    polygon.isStatic = false;
    polygon.position.x = mouseX;
    polygon.position.y = mouseY;
}

function mouseReleased() {
    constraint.fly();
    detectCollision(polygon, block1A.body);
    detectCollision(polygon, block2A.body);
    detectCollision(polygon, block3A.body);
    detectCollision(polygon, block4A.body);
    detectCollision(polygon, block5A.body);
    detectCollision(polygon, block6A.body);
    detectCollision(polygon, block7A.body);
    detectCollision(polygon, block8A.body);
    detectCollision(polygon, block9A.body);
    detectCollision(polygon, block10A.body);
    detectCollision(polygon, block11A.body);
    detectCollision(polygon, block12A.body);
    detectCollision(polygon, block13A.body);
    detectCollision(polygon, block14A.body);
    detectCollision(polygon, block15A.body);
    detectCollision(polygon, block16A.body);
    detectCollision(polygon, block1B.body);
    detectCollision(polygon, block2B.body);
    detectCollision(polygon, block3B.body);
    detectCollision(polygon, block4B.body);
    detectCollision(polygon, block5B.body);
    detectCollision(polygon, block6B.body);
    detectCollision(polygon, block7B.body);
    detectCollision(polygon, block8B.body);
    detectCollision(polygon, block9B.body);
}

function detectCollision(item1, item2) {
    if (item1.position.x + 25 >= item2.position.x) {
        item2.isStatic = false;
    }
    /*algorithm(body.position.width and body.position.collision does not exist) for isTouching() */
}

function keyPressed() {
    if (keyCode === 32) {
        constraint.attach(polygon);
    }
}
