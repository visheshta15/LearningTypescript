
// Abstract class
// AC cannot be instantiated
// abstract member of class need to be implemented by each child class

type Holidays = {
    date: Date;
    reason: string;
}[]

abstract class Department {
    protected abstract holidays: Holidays
    protected constructor(protected name: string) {}

    public addHolidays(holidays :Holidays){
        if(Array.isArray(holidays)){
            for(const holiday of holidays){
                this.holidays.push(holiday)
            }
        }
    }

    // public printHolidays(){
    //     if(this.holidays.length === 0){
    //         return console.log("There are no holidays")
    //     }
    //     console.log('Here are the list of holidays', this.holidays.length)

    //     this.holidays.forEach((ele: {date: Date, reason: string}, index:number)=> {
    //         console.log(`${index +1 }. ${ele.date.toString().substring(0,15)} --- ${ele.reason}`)
    //         // console.log(ele)
    //     })
    // }

    public abstract printHolidays():void
}

class ItDepartment extends Department {
    protected holidays: Holidays = []
    constructor(){
        super("it")
    }

    // method overwritting
    public printHolidays(){
        if(this.holidays.length === 0){
            return console.log("There are no holidays")
        }
        console.log(`Here are the list of holidays of ${this.name} department` )

        this.holidays.forEach((ele: {date: Date, reason: string}, index:number)=> {
            console.log(`${index +1 }. ${ele.date.toString().substring(0,15)} --- ${ele.reason}`)
            // console.log(ele)
        })
    }

    


}

class AdminDepartment extends Department {
    protected holidays: Holidays =  []

    constructor(){
        super("admin")
    }

    public printHolidays(){
        if(this.holidays.length === 0){
            return console.log("There are no holidays")
        }
        console.log(`Here are the list of holidays of ${this.name} department`)

        this.holidays.forEach((ele: {date: Date, reason: string}, index:number)=> {
            console.log(`${index +1 }. ${ele.date.toString().substring(0,15)} --- ${ele.reason}`)
            // console.log(ele)
        })
    }
}

// error
// const itDepartment: ItDepartment = new ItDepartment('it')
// Department.addHolidays([1,3,5,6])

const itholidays: Holidays = [
    {
        date: new Date(2002,8,9),
        reason: "Engineer day"
    },
    {
        date: new Date(2007,8,7),
        reason: "chrismas"
    }
]
const adminholidays: Holidays = [
    {
        date: new Date(2002,10,1),
        reason: "HR day"
    },
    {
        date: new Date(2007,8,7),
        reason: "chrismas"
    }
]

const itDept: ItDepartment = new ItDepartment()
const adminDept: AdminDepartment = new AdminDepartment()

console.log(itDept, adminDept)

itDept.addHolidays(itholidays)
adminDept.addHolidays(adminholidays)

itDept.printHolidays()
adminDept.printHolidays()
// console.log(itDept, adminDept)
