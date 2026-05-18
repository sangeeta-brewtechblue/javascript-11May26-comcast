//print the length of each string
//print each city in uppercase
let cities = ["mumbai","pune","delhi","chennai"];
cities.forEach((city)=>console.log(city.length))
cities.forEach((city)=>console.log(city.toUpperCase()))

//create an array of few numbers. find the sum of squares of even numbers from it;

let numbers = [1,35,6,4,13,2,7];
let result =numbers.filter((num)=>num %2 ==0).map((num)=>num * num).reduce((prev,latest)=>(prev + latest),0);
console.log("Result",result)