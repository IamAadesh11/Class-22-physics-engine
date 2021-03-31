const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;

var engine , world , obj1 ;
var obj2 ;

function setup() {
  createCanvas(800,400);
  
engine = Engine.create ();
world = engine.world ;

var opt = {
 isStatic: true 


}

var opt1 = {
  restitution: 2.3

}


obj1 = Bodies.rectangle(5,390,800,10,opt);
World.add(world,obj1);

obj2 = Bodies.rectangle(200,19,50,50,opt1);
World.add(world,obj2);


console.log (obj2);

}

function draw() {
  background("yellow");  
  
Engine.update (engine);



rect (obj1.position.x ,obj1.position.y , 800,10 );

ellipse (obj2.position.x ,obj2.position.y , 50,50 );

}