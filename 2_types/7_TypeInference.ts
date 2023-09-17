//Type Inference

// [1] implicit
let fname1 = "John"
fname1 = 12

const no1 = 52   //const no1:52
let no2 = 52     //let no1:number

// [2] declare explicit
let finalResult: number

function addNum(a: number, b: number){
    return a+b
}

finalResult = addNum(10,20)

// [3]
let person1 = {
    name: 'vish',
    age: 27
}

let car1: {
    color: string;
    brand: string;
    model?: string
} = {
    color: "red",
    brand: "bmw"
}


console.log(person1, car1)