class Dog{

    constructor(name){
        this._name = name;
    }
   get name(){
        return this._name;
    }

    set name(newName){
        if(newName){
            this._name = newName;
        }
    }

  

}
let d1 = new Dog('tommy');
console.log(d1.name)
d1.name = 'ash'
console.log(d1.name)