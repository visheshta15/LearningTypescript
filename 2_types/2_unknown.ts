// unknown -- i don't know
// use in those cases where in starting of the program you are not aware of the actual value of particular variable

// [1]
function multiplyBy2(no: unknown){
    if( typeof no === "number"){
        return no * 2
    }
    return "please enter a valid number"
}

console.log(multiplyBy2(4))
console.log(multiplyBy2("vish"))

// [2]
function invokeAny(calback: any){
    calback()
}
function invokeUnknown(calback: unknown){
    calback()
}

// the statement callback() has a type error Object is of type 'unknown'. Now, contrary to any, TypeScript protects you from invoking something that might not be a function!
// You need to perform type checking before using a variable of type unknown. In the example, you would simply need to check if callback is a function type:


