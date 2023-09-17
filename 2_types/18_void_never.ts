// void - void is assign to function which does not return any value
// never - never assign to a funtion that never completes

// [1] void
// function addNo(){
    const addNo = ():void =>{
        console.log(2+4)
    }
    addNo()
    
    // [2] never
    // const throwError = () => {
    const throwError = () :never=> {
        throw new Error("your programs terminates because of error")
    }
    throwError()