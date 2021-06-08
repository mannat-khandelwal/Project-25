class paper {

    constructor(x,y,r){
      
        var options ={
            isStatic:false,
            restitution : 0.3,
            density : 1.2,
            friction : 0
        }
        this.x=x;
		this.y=y;
        this.image = loadImage("paper.png");
	    this.r=70;
		this.body=Bodies.circle(x, y, r/3, options);
 		World.add(world, this.body);
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER);
			image(this.image,0,0,70,70);
			pop()
			
	}

}

    