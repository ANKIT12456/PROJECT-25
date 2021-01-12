class BOX{
    
    constructor(x,y,width,height){
        
        var box_option={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,box_option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate (angle);

        fill ('brown');
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}