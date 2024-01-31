// Interfaces are nothing but contracts in a sense that they are define in advance how an object and class structure going to look once an object or class is created by the user
// Interface is a blue print of a final object that a lass will create
// [1]
interface PersonI {
    name: string;
    email: string;
    age: number;
    phone?: number;
    greet?: ()=> void

}

const persn: PersonI = {
    name: 'max',
    email: 'vish@gmail.com',
    age: 32
}

// [2]