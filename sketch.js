
//
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var arrow = [];


function preload() {
  backgroundImg = loadImage("assets/background.png");
  baseimage = loadImage("assets/base.png");
  playerimage = loadImage("assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(
    300,
    playerBase.position.y - 100,
    100,
    100
  );

  shoot(archerAngle) ;{
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body, {x: velocity.x, y:velocity.y});
  
  }}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  image(playerimage,player.position.x,player.position.y,50,180);

  playerArcher.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}