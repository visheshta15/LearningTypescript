// array types 

// [1]
let arr1 = [1, 2, 3]
let arr11: number[] = [1, 2, 3]

let arr2 = ["A", "B", "C"]
let arr21: Array<string> = ["A", "B", "C"]

let arr3 = [1, 2, 3,"A", "B", "C"]
let arr31: (number|string)[] = [1, 2, 3,"A", "B", "C"]

// [2]
type SingleAirplane = {
    flightNo: string;
    airplaneMode: string;
    dateOfDeparture: string;
    dateOfAriival: string;
    from: string;
    to: string;
    seat: {
        // orderProperty: string
        [key: string|number] : string
    }
}

type AirPlanes = SingleAirplane[]

const arrAirplanes: AirPlanes = [
    {
        flightNo: "SAH",
        airplaneMode: "A30",
        dateOfDeparture: "1 Jan 23",
        dateOfAriival: "2 Jan 23",
        from: "delhi",
        to: "chennai",
        seat : {
            "10A": "max",
            "10B": "john",
            1:"j"
        }
    },
    {
        flightNo: "SAH",
        airplaneMode: "A30",
        dateOfDeparture: "1 Jan 23",
        dateOfAriival: "2 Jan 23",
        from: "delhi",
        to: "chennai",
        seat : {
            "10A": "max",
            "10B": "john",
            1:"j"
        }
    }
]

console.log(arrAirplanes)