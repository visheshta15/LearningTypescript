enum AutomobileTypes1 {
    car = "car",
    van = "van",
    bus = "bus",
    truck = "truck",
    bike = "bike",
}

enum AutomobileBrands1 {
    ferrai = "ferrai",
    honda = "honda",
    bmw = "bmw",
    tata = "tata",
    toyota = "toyota",
}

enum AutomobileColors1 {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
}

interface AutomobileI1<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
}

interface CommercialVehicle {
    capacity: string;
    licenseRenewalDate: Date;
}

class Car1 implements AutomobileI1 <string, AutomobileBrands1, AutomobileColors1>{
    public type: string = "car";
    constructor(
        public brand: AutomobileBrands1, 
        public colors: AutomobileColors1[],
        public description: string
        ){

    }
}

// multiple interfaces , classes can implement multiple interfaces
class Truck1 implements 
    AutomobileI1 <string, AutomobileBrands1, AutomobileColors1>,
    CommercialVehicle{
    public type: string = "truck";
    constructor(
        public brand: AutomobileBrands1, 
        public colors: AutomobileColors1[],
        public description: string,
        public capacity: string,
        public licenseRenewalDate: Date,
        private driverName: string,
        ){
    }
}

const ferrai: Car1 = new Car1(
    AutomobileBrands1.ferrai,
    [AutomobileColors1.white, AutomobileColors1.red],
    "this is brand new ferrari"
)
const truck: Truck1 = new Truck1(
    AutomobileBrands1.toyota,
    [AutomobileColors1.red],
    "this is toyota truck",
    "15 tonners",
    new Date(),
    "My love Aman"
)

console.log(ferrai , truck)

class InstaUser {
    constructor(public name: string){}
}
class InstaPassword {
    constructor(public password: string){}
}

// classes can only extend single class
class Registereduser extends InstaUser, InstaPassword {

}