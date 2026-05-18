class Car{

    constructor(make,model){
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate(){
        this.speed = this.speed + 10;
        console.log("accelerating the speed"+ this.speed)

    }

    showDetails(){

        console.log("make"+this.make+"model"+this.model);

    }



}

let c1 = new Car("Hyundai","E Creta");
console.log(c1.speed);
let c2 = new Car("Merc","C class");
let c3 = new Car("Honda","honda city");

c1.accelerate();
c2.showDetails();
