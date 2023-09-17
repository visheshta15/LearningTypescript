// Enums types
// enumarate the value of dataTypes

// const roles = ['admin', 'auuthor', 'editor']

// import * as roles from './roles'
// roles.ADMIN

import { Roles} from './19.1_roles'

type Person = {
    name: string;
    email: string;
    password: string;
    role: Roles;
}


const person4:Person = {
    name: 'vish',
    email: "vish@gmail.com",
    password: "123",
    role: Roles.editor
}

console.log(Roles, person4)