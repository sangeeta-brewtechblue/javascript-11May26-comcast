class City {
    constructor(name,metro,state){
        this.name = name;
        this.metro = metro;
        this.state = state
    }
}

let cities = [
new City("Mumbai",true,"Maharashtra"),
new City("Satara",false,"Maharashtra"),
new City("Banglore",true,"Karnataka"),
new City("Delhi",true,"Delhi"),
new City("Solapur",false,"Maharashtra"),
]

cities.filter((city)=>{return city.metro}).map((city)=>{console.log((city.name.toUpperCase()))});
let x = "str";
