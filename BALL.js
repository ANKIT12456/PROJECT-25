class BALL{

    constructor(x,y){

        var ball_option={
            isStatic:false,
            restitution:0.3,
            friction:1.3,
            density: 0.7
        }
        this.body=Bodies.rectangle(x,y,60,60,ball_option);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }

    present(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
        pop();
    }
}