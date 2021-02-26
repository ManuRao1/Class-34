class Box {
  constructor(x,y,w,h){
    var option = {restitution:0.04,friction:1.5,density:1.0}
    this.w = w
    this.h= h
    this.body = Matter.Bodies.rectangle(x,y,w,h,option)
    Matter.World.add(world,this.body)
  }
  
  display(){
    rectMode(CENTER)
    
  fill("hotpink")
  rect(this.body.position.x,this.body.position.y,
       this.w,this.h,20)
  }
}