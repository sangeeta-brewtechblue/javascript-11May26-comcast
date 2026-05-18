let promise1 = new Promise ((resolve,reject)=>{
      setInterval(reject("some error from server"), 4000);

});

promise1.then(function (value){
    console.log("Promise has been resovled  with data as"+value);
}).catch((error)=>console.log("error"+error));

console.log("promise is executing")
console.log("Hello world");
console.log("printing some more log info");
