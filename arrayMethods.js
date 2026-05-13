var fruits = ["grape","apple","blueberry"];

console.log(fruits.indexOf("apple"));

fruits.push("strawberry")

var sliced =fruits.slice(1,3);

console.log(sliced);
console.log(fruits);


//console.log(fruits)

//var topEle = fruits.pop();
//console.log(topEle)

var spliced =       fruits.splice(1,1);

console.log(spliced)
console.log(fruits)

for(fruit in fruits){
    console.log(fruit)
}

for(fruit of fruits){
    console.log(fruit)
}


 var name =Array.from("sangeeta");

 console.log(name)




//console.log(fruits)
