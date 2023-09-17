// [1]declaring a function ----------------------------------------------
function intro(name: string, age: number): string{
    return `my name is ${name} and age ${age}`
}

// function expression 
const intro2 = function intro(name: string, age: number): string{
    return `my name is ${name} and age ${age}`
}

// arrow function 
const intro3 = (name: string, age: number): string => {
    return `my name is ${name} and age ${age}`
}

// [2]default and optional parameters ----------------------------------------------
function intro4(name: string, age: number, country?: string): string{
    return `my name is ${name} and age ${age}. Lives in ${country}`
}
console.log(intro4("vish",34))
console.log(intro4("vish",34, 'Delhi'))



// [3] custom parameters and return types ---------------------------------------------------
enum AgeUnit {
    years = "years",
    months = "months"
}

type greetingFunction = (greeting: string) => string

type PersonType = {
    name: string;
    age: number;
    ageUnit : AgeUnit;
    country: string;
    // greet: Function;
    // function call signature ------------------------------------
    // greet: (greeting:string, ageUnit:AgeUnit) => string;
    greet: greetingFunction;
}

const person5:PersonType = {
    name: "vish",
    age: 30.3,
    ageUnit: AgeUnit.years,
    country: "India",
    greet: (greeting:string)=>{
        return `${greeting} ${person5.name}`
    }
}

function convertAgeToMonths (person5: PersonType):PersonType{
    person5.age = person5.age * 12
    person5.ageUnit = AgeUnit.months
    console.log(person5)
    return person5
}

convertAgeToMonths(person5)
console.log(person5.greet("good morning"))