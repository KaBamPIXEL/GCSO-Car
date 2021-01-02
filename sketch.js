var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, 800);
  wall.shapeColor = color(80, 80, 80);

  speed = random(55, 90);
  weight = random(900, 1500);
}

function draw() {
  background(0,0,0);
  
  if (keyDown("space")) {
  
  if (car.x - wall.x < wall.x - car.x) {
    car.collide(wall);
    car.velocityX = 0;

    var deformation = (0.5*weight*speed*speed) / 2250;

    if (deformation < 100) {
      car.shapeColor = color(0,255,0);
    } else if (deformation >= 100 && deformation < 180) {
      car.shapeColor = color(230,230,0);
    } else if (deformation >= 180) {
      car.shapeColor = color(255, 0, 0);
    } else {
      car.shapeColor = color(255, 255, 255);
    }
  }
}
  drawSprites();
}