class Boble {
  constructor(x,y,r,farge){
    this.x=x;
    this.y=y;
    this.r=r;
    this.farge=farge;
;
  }
  flytt(){
    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5);
    if(this.x<=0 || this.x>= width){
      this.x=width/2;
      this.y=height/2;
    }
    if(this.y<=0 || this.y>= height){
      this.x=width/2;
      this.y=height/2;
    }
  }
  tegn(){
    stroke(255);
    strokeWeight(4);
    fill(this.farge);
    circle(this.x,this.y,this.r*2);
    //ellipse(this.x,this.y,this.r*2);
  }
}
