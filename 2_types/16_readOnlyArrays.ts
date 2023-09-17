// readonly arrays 
// immutable array, can only be read but cannot be changed

// [1] readonly array
let readonlyNoArr: readonly number[] = [1,2,3]
readonlyNoArr.push(4)

// [2] readonly tuples
type readonlyPerson = readonly [string, string, number?]
const person3: readonlyPerson = ['jon', 'max']
person3.push(33)

//[3] long form syntax
type x = Readonly<string[]>                     //array
type y = Readonly<[string, string, number]>     // tuples