//literal notations

var calc = {
      name:"calc",

      add:function(x,y){
           console.log("It adds two values"+(x+y))
      }

}

console.log(calc.name)
calc.add(3,4);


///////// Using constructor function

function Car(color,make,model){
      this.color = color;
      this.make = make;
      this.model = model     
      this.display=function(){
        console.log("Car details"+this.color+"-"+this.make+"-"+ this.model)
      } 

}


 

var c1 = new Car("blue","merc","C class");
var c2 = new Car("White","BMW","Q3");
var c3 =Object.create(c1);

c3.display();




