var messages = ["Meow ..","I am a talking cat","yes.. I like to talk"]

var cat = {
             color:"grey",
             say:function(quip){
                  
                   console.log(quip);
             }
}

 console.log(x)
 let x =10;

 //let x =5;

for(let i=0; i< messages.length;i++){

    //  cat.say(messages[i]);

       setTimeout(function(){
          cat.say(messages[i])
       },1500)

}


