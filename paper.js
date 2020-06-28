class paper{
    constructor(x,y,diameter){
        var options={
        isStatic:false,   
        //restitution:0.3,    
         friction:0.5,
         density:1.2
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        World.add(world,this.body);


    }
    display(){
        var angle=this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
    
        //this.body.position.x=mouseX;
        // this.body.position.y=mouseY;
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.diameter,this.diameter);
        pop();
        
    }
}