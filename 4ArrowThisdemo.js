function Person(){
      this.age = 0;

      setInterval(function growUp(){
         this.age ++;
         console.log(this.age);
      },1000)
}

function PersonThat(){
      this.age = 0;
       var that = this;
      setInterval(function growUp(){
         that.age ++;
         console.log(that.age);
      },1000)
}

//var p1 = new Person();
//var p2 = new PersonThat();

function PersonLambda(){
    this.age = 0;
    setInterval(()=>console.log(this.age++),1000)
}

var p3 = new PersonLambda();