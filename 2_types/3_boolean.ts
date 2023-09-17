// boolean
// holds true or false 

// [1]
let booleanValue: boolean = true

// Literal value
booleanValue = false

// expression
booleanValue = typeof "abc" === "string"
booleanValue = 1>10
console.log(booleanValue)

// [2] error
booleanValue = {}
booleanValue = "new york"

// ts don't consider null and undefined as falsy value
booleanValue = null
booleanValue = undefined