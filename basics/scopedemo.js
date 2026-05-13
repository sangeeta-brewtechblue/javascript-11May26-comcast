// This variable is in the Global Scope
var planet = "Earth";

function checkLocation() {
    // The function can "see" the global variable
    console.log("Inside function: " + planet); 
}

checkLocation();

// You can also change it from anywhere
planet = "Mars";
console.log("Outside function: " + planet);

function scopeTest() {
    if (true) {
        var message = "I am inside the IF block";
    }
    
    // Even though the block ended, 'message' is still accessible 
    // because 'var' only respects function boundaries.
    console.log(message); 
}

scopeTest();


function localExample() {
    var secret = "12345";
    console.log("Inside: " + secret);
}

localExample();

// This will throw a ReferenceError
// 'var' stays contained within the function it was born in.
console.log("Outside: " + secret);