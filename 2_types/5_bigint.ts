//bigInt types

// [1]
// "target": "es2020", in config file

// constructor method 
let bigInt1 = BigInt(945845)

// literal syntax 
let bigInt2 = 123456789n
console.log(bigInt1, bigInt2)

// [2] y to use bigint
// number types in js can represent whole no upto 2^53
const safeInt = Number.MAX_SAFE_INTEGER
const safeIntPlusOne = safeInt + 1
const safeIntPlustwo = safeInt + 1

console.log(safeInt, safeIntPlusOne, safeIntPlustwo) //9007199254740991 9007199254740992 9007199254740992
console.log(safeIntPlusOne === safeIntPlustwo)  //true

// [3] operations
let a: bigint = BigInt(1234)
let b: bigint = 1233n
let c: bigint = a -b 
console.log(a,b,c)   //1234n 1233n 1n

// [4] error
let e: bigint = 1.3n                // cannot use decimal vaule
let f: bigint = Math.log(a)         // only number types work with Math object