// Type Alias 
// Type aliases in Typescript us developers to create custom names for types. They are used to assign a name to a type before creating a new type. Type aliases can be used for primitives, object types, union types, tuples and intersections.

// [1]
let article: {
    author: string;
    content: string;
    title: string;
    image?: string
} 

article = {
    author: "RK rowlling",
    content: "Wizard",
    title: "Harry Potter and the Socer's Stone"
}


// [2] type object
type Article = {
    author: string;
    content: string;
    title: string;
    image?: string
}

let post: Article = {
    author: "RK rowlling",
    content: "Wizard",
    title: "Harry Potter and the Socer's Stone"
}

// [3] ex 
type Caterer = {
    name: string;
    address: string;
    phone: number;
}

type Plane = {
    model: string;
    flightNo: string;
    TimeOfDeparture: Date;
    TimeOfArrival: Date;
    caterer: Caterer;
}

const airplane: Plane = {
    model: "Airbus A20",
    flightNo: "A2221",
    TimeOfDeparture: new Date(),
    TimeOfArrival: new Date(),
    caterer: {
        name: "special food",
        address: "london",
        phone: 123456789
    }
}