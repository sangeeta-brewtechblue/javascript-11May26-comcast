//spread operator demo

let arr1 = Array.of(1,2,3,4);
//console.log(arr1);

let arr2 = Array.from([5,6,7,8]);
//console.log(arr2)

let spreadArr = [...arr1,...arr2];
//console.log(spreadArr)

//spreadArr.forEach((val)=>console.log(val));


//Rest operator demo

function sum(...args){
    return args.reduce((prev,cur)=>{return prev + cur},0)
}
function average(...args){
   
     let sumOfNum = sum(...args);

     console.log(sumOfNum/args.length)

}
//console.log(average(1,2,3,4));

//console.log(average(6,7,8,9,10));

//console.log(sum(1,2,3,4))
//console.log(sum(4,8,6,8,0,8,54,1))

const fruits = ["Apple","Strawberry","Cherry","Watermelon"];
//arrya destructuring and rest should be the last parameter
const [first,second,...remainingFruits] = fruits;

console.log(first);
console.log(second);
console.log(remainingFruits);




