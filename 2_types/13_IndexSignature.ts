//Index Signature

type Airplane = {
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

const airPlane1:Airplane = {
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