// tuples types
// special type of array where length of an array and type of each individual element is predefined

// [1]
//firstname, lastname, age
let person2: [string,string,number?]
person2 = ["max", "done"]

// [2]
// [noOfStudents:number, passing: boolean, 'john', 'stella']
type listOfStudents = [number, boolean, ...string[]]
const passingStudents:listOfStudents = [3,true, 'aman', 'jai', 'neeraj']
const failingStudents:listOfStudents = [1,false, 'scott']