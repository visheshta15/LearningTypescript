// access modifiers    outside the class   child class     parrent class 
// public                  yes                 yes             yes
// protected               No                  yes             yes 
// private                 No                  No              yes

// if no access modifiers are assigned to the members of class, by default it will be public

// You can use protected access modifiers to provide the access to the members of a class to its child class.

// The only difference between private and protected is that the protected members can be accessed by the child class and private members.

class Person{
    // private name: string;
    protected name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    getName(){
        return "Hi... " + this.name
    }
}

class Admin extends Person {
    public returnName(){
        return this.name
    }
}

let pr1:Person = new Person("mak", 23)
// pr1.name = "mike"
console.log(pr1.getName())
console.log(pr1)
// pr1 object is a instance of Person class. And can change any property of this object from outside of the class 

const admin2:Admin =  new Admin("mark", 45)
console.log(admin2)
console.log(admin2.returnName())