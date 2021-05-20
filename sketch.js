
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject
var world, img;
var p;

function preload() {
	img = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width / 2, 670, width, 20);
	dustbinObj = new dustbin(1200, 650);
	p = new Paper(200, 400, 60, img);

	Engine.run(engine);

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(p.body, p.body.position, { x: 70, y: -145 })
	}
}

function draw() {
	rectMode(CENTER);
	background(230);

	p.display();
	groundObject.display();
	dustbinObj.display();


}

