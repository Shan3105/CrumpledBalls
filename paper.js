class Paper 
{
	constructor(x,y,r,img)
	{
		var options={
			restitution:0.3,
			friction:0,
			density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r = r;
		this.img = img;
		this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options)
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push();
			translate(groundPos.x, groundPos.y);
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128);
			image(this.img,-this.r/2, -this.r/2, this.r, this.r);
			pop();
			
	}
}