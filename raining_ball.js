var ball = function(x,y,r,g,b)
{
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    
    this.draw = function() {
    fill(r, g, b);
       ellipse(this.x, this.y, 9, 9);
  };
    
};

var balls = [];
for (var count = 0; count < 13337;count++)
{
    var x = Math.random()*400;
    var y = Math.random()*400;
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
        balls[count] = new ball(y, x,r,g,b);
}

for (var count = 0; count < balls.length ; count++)
{
    balls[count].draw();
}
