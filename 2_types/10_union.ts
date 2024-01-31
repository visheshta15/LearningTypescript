// union types
// either all the A type or all B type or all the common property of A or B

type Dog = {
    name: string;
    barks: boolean;
}
type Cat = {
    name: string;
    purrs: boolean;
}

type DogAndCatUnion = Dog | Cat

let dog:DogAndCatUnion = {
    name: "taffu",
   
}
let cat:DogAndCatUnion = {
    name: "tusi",
    purrs: true
}

let dogCat:DogAndCatUnion = {
    name: "hybrid",
    barks: true,
    purrs: true
}