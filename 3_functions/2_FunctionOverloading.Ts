type Reservation = {
    departureDate: Date;
    retureDate?: Date;
    departingFrom: string;
    destination: string;
}

//function call signature
// type Reserve = (
//     departureDate: Date,
//     retureDate: Date,
//     departingFrom: string,
//     destination: string,
// ) => Reservation

// short hand function call signature
type Reserve = {
    (
        departureDate: Date,
        retureDate: Date,
        departingFrom: string,
        destination: string,
    ):Reservation | never;
    (
        departureDate: Date,
        departingFrom: string,
        destination: string,
    ):Reservation | never
}


const reservePerson: Reserve = (
    departureDate: Date,
    retureDateOrdepartingFrom: Date|string,
    departingFromOrdestination: string,
    destination?: string
)=> {
    if(retureDateOrdepartingFrom instanceof Date && destination ){
        return {
            departureDate: departureDate,
            retureDate: retureDateOrdepartingFrom,
            departingFrom: departingFromOrdestination,
            destination: destination,
        }
    } else if(typeof retureDateOrdepartingFrom === 'string'){
        return {
            departureDate: departureDate,
            departingFrom: retureDateOrdepartingFrom,
            destination: departingFromOrdestination,
        }
    } else {
        throw new Error("Pls provide valid details to reserve a ticket")
    }
}

console.log(reservePerson(new Date(), new Date(), "NY", "WashingTon"))
console.log(reservePerson(new Date(), "NY", "WashingTon"))
console.log(reservePerson())