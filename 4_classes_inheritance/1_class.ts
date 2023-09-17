// classes
// in OOP a class is a blueprint for creating objects. A class defines the initial values of various properties and methods of an objects 

// object
let person6 = {
    name: "vish",
    email: "abc@gmail.com",
    greet: ()=> {console.log(`my name is ${person6.name}`)},
    username: function(){console.log(`username is ${this.name}`)}
}
person6.greet()
person6.username()


//class
class PersonClass{
    name: string;
    email: string

    // constructor function is called when the class is instanciated
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
    greet(){
        return `${this.name}`
    }

}


// instance of class
const p1 = new PersonClass("john", "abc@gmail.com")
const p2 = new PersonClass("max", "abc@gmail.com")
console.log(p1, p1.greet(), p2)
