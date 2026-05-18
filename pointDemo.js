class Point{
    constructor(x,y){
        this.x =x;
        this.y = y;
      }

    static distance(p1,p2){
          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;
     console.log("Dist between two pts is:",Math.hypot(dx,dy))
    }


}

let p1 = new Point(10,3);
let p2 = new Point(25,9);

Point.distance(p1,p2)