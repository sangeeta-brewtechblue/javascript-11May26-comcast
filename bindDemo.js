var james = {
    
    name: "James",
    age : 25,
    greet:function(){
        console.log("Hello,"+ this.name)
    }

}
james.greet();

var jenny = {
    name : "Jenny",
    age:45
}

 var jennyObj =       james.greet.bind(jenny);

jennyObj();