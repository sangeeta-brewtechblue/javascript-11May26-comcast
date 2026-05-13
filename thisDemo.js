var car = {
    make:"BMW",
    color:"Blue",
    model:"Q3",

    showCarDetails:function(){
        console.log("Car"+this.make +"-"+this.color+"-"+this.model);
        var that = this;
        nestedFun = function (){
            // console.log("Car"+this.make +"-"+this.color+"-"+this.model);
             console.log("Car"+that.make +"-"+that.color+"-"+that.model);
        }

        nestedFun();

    }

}

car.showCarDetails();