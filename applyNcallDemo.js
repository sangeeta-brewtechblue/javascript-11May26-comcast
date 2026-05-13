var cat = {
    name:"kitty",
    color:"grey",
    age:13
  
}

function printInfo (){
    console.log("PrintInfo:"+this.name+"-"+ this.color +"-"+this.age);
   }


printInfo();

var cat1 = {
    name:"kitty1",
    color:"white",
    age:7}


//cat.printInfo();

printInfo.apply(cat1,[]);
printInfo.call(cat);