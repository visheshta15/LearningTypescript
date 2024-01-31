//assigning Generics to interface

enum AutomobileTypes {
    car = "car",
    van = "van",
    bus = "bus",
    truck = "truck",
    bike = "bike",
}

enum AutomobileBrands {
    ferrai = "ferrai",
    honda = "honda",
    bmw = "bmw",
    tata = "tata",
    toyota = "toyota",
}

enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
}

interface AutomobileI<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
}

const tata : AutomobileI<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.tata,
    colors: [AutomobileColors.white , AutomobileColors.black],
    description: "This is my first tata nexon car",
}

const honda: AutomobileI <string, string, string > = {
    type: "car",
    brand: "Honda",
    colors: ["white" , "blue"],
    description: "This is Honda",
}

const toyota: AutomobileI <string, AutomobileBrands, number> = {
    type: "car",
    brand: AutomobileBrands.honda,
    colors: [5667, 8967],
    description: "This is Toyota",
}

console.log(tata)
console.log(honda)
console.log(toyota)