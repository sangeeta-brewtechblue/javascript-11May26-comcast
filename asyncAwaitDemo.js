const prepareCoffee = (order)=>{
    return new Promise((resolve,reject)=>{
    console.log(`prep started for order ${order}`);

    setTimeout(()=>{
      const  isMachineWorking = true;

      if(isMachineWorking){
           resolve(`Your order ${order} is ready`)
      }
      else{
            reject(`sorry,take refund..machine not working`)
      }
    },2000)
    })
 
}

//prepareCoffee("Capachinu").then((val)=>console.log(val))



const asyncPrepareCoffee = async ()=>{
         try{
        //console.log(`prep started for order ${order}`);

              const status = await prepareCoffee("IcedLatte");
              console.log(`${status}`)
             

         }
         catch(error){
            console.log("Failed..something went wrong")
         }
         finally{
            console.log("leaving the cafe")
         }

}

asyncPrepareCoffee();
