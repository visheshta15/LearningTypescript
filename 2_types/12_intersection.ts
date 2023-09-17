// intersection types
// common properties of type A and type b along with the unique property of each one of them

type Dog2 = {
    name: string;
    barks: boolean;
    color: string;
}
type Cat2 = {
    name: string;
    purrs: boolean;
    color: string;
}

type HybridAnimal = Dog2 & Cat2

const hybridpet: HybridAnimal = {
    name: "max",
    color: "red",
    purrs: true,
    barks: false
}