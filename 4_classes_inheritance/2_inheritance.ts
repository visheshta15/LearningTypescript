class User {
    name: string;
    email: string;
    age: number;

    constructor( name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age
    }
}

class AdminUser extends User {
    isAdmin: boolean = true;
    userReporting: number;
    constructor(name: string, email: string, age: number, userReporting: number){
        super(name, email,age)
        this.userReporting = userReporting
    }
}

const u1:User = new User("kush", "abc@gmail.com", 23)

const admin1: AdminUser = new AdminUser("kushuhik", "abc@gmail.com", 23, 1234567)
console.log(u1,admin1)