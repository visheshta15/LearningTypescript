enum Roles {
    admin = "admin",
    auther = "auther",
    editor = "editor",
}

enum PermissionList {
    read = "read",
    write = "write",
    execute = "execute",
}

interface Role {
    role: Roles
}

interface UserPermissions {
    permissions: PermissionList[]
}

interface UserI {
    name: string;
    email: string;
    phone: number;
    gender: string;

}

interface UserWithAddressI extends UserI {
    address: string;
}

interface AdminUserI extends UserI, Role, UserPermissions{
    noOfUsersReporting: number
}

const userI1: UserI = {
    name: "Vish",
    email: "Vish@gmail.com",
    phone: 123456789,
    gender: "F",

}

const useraddress1:UserWithAddressI = {
    name: "Kush",
    email: "Kus@gmail.com",
    phone: 987654321,
    gender: "F",
    address: "Kanpur, UP"
}

const kush: AdminUserI = {
    name: "kanchi",
    email: "kamal@gmail.com",
    phone: 8978978797,
    gender: "M",
    role: Roles.editor,
    permissions: [ 
        PermissionList.read, 
        PermissionList.write, 
        PermissionList.execute
    ],
    noOfUsersReporting: 5
}

console.log(userI1, useraddress1, kush)