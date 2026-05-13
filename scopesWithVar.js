var planet = "Earth"       //global scope

function checkLocation(){
    console.log("inside function"+ planet)
}

checkLocation();        //"Earth"

planet = "Mars"            //global var value changed

console.log("Outside function"+planet)   //Mars

function scopeTest(){
    if(true){
        var message ;
    }
    console.log(message)       // message available in function scope
    message =  "I am inside the if block";

    console.log(message)  


}

scopeTest();

function localEx(){
    var secret = "12345"
    console.log("Inside ex:"+ secret)
}
var secret  ;
localEx();                  // 12345
console.log("Outside ex:"+ secret);    //error