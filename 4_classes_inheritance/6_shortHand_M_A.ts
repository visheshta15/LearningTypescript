class Person3{
    private testUserAge(age: number){
        if(age<0 || age>100){
            throw new Error("Invalid age")
        }
        return age
    }

    constructor(private _name: string, private _age: number){
        this.testUserAge(_age)
        this._age  = _age
    }

    public set name(name: string){
        this._name = name
    }

    public get name(){
        return this._name
    }

    public set age(age: number){
        this.testUserAge(age)
        this._age = age
    }

    public get age(){
        return this._age 
    }
}

const per4:Person3 = new Person3("babita", 34)
// per4.age = 12
console.log(per4, per4.age, per4.name)