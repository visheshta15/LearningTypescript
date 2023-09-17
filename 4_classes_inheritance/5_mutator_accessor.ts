// [1]
class Person1{
    constructor(protected name: string, public age: number){
        if(age<0 || age>100){
            throw new Error("Invalid age")
        }
    }

    getName(){
        return "Hi... " + this.name
    }
}

const per1:Person1 = new Person1("babita", 30)
const per2:Person1 = new Person1("rena", 20)
per2.age = -2
console.log(per1, per2)

// [2] // getter and setter
class Person2{
    private _age: number | undefined;
    constructor(protected name: string){}

    getName(){
        return "Hi... " + this.name
    }

    public set age(age: number){
        if(age<0 || age>100){
            throw new Error("Invalid age")
        }
        this._age = age
    }

    public get age(){
        if(this._age === undefined){
            throw new Error("age property is not yet set")
        }
        return this._age
    }
}

const per3:Person2 = new Person2("babita")
per3.age = 12
console.log(per3, per3.age)