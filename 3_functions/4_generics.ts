
// function overloading
// type Filter = {
//     (array:number[], predicate: (item:number)=> boolean): number[];
//     (array:string[], predicate: (item:string)=> boolean): string[];
//     (array:object[], predicate: (item:object)=> boolean): object[];
// }

// Generics 
// type Filter = {
//     <T>(array:T[], predicate: (item:T)=> boolean): T[];
// }
type Filter = <T>(array:T[], predicate: (item:T)=> boolean) => T[];

// function filter(array:any[], predicate: Function){
const filter: Filter = (array, predicate) => {
    let result = []

    for(let i=0; i<array.length; i++){
        let item = array[i]
        if(predicate(item)){
            result.push(item)
        }
    }
    return result
}       

let numArr = [1,5,7,9,10,3,11]
function greaterThanSeven(item: number){
    return item>7
}
console.log(filter(numArr, greaterThanSeven))

let animals = ['lion', 'tiger', 'dog', 'cat']
function animalsOtherThanCat(item:string){
    return item !== 'cat'
}
console.log(filter(animals, animalsOtherThanCat))