// static properties and classes --------------------------
class Automobile {
    public static color : string = "red"

    public static calculateMileage(miles: number, liters: number){
        return miles / liters
    }
}

const carAutomobile: Automobile = new Automobile()
console.log(Automobile.color)
console.log(Automobile.calculateMileage(50,5))

// Math static methods
const pi  = Math.PI
console.log(pi)
