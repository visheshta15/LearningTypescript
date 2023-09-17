// undefined: it is not been yet define
// null : js not able to compute or ran into an error

// [1]
let user: string 
// noEmitOnError: false 
console.log(user)

let saveButton = document.getElementById("save")
console.log(saveButton)

// [2]  TS protects you from accessing values which are not defined
let loggedInUserName: string 
const users = [
    {name: "obbj", age: 12},
    {name: "hina", age: 22},
]
const loggedInUser = users.find((user)=> user.name ===  loggedInUserName)
console.log(loggedInUser.age)
 
// [3] TS protects you from accessing values which are null
let saveBtn: HTMLElement = document.getElementById("save")!
console.log(saveBtn)
if(saveBtn !==){
    // do something
}