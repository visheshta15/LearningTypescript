// [1]
type MapFunction = <T>(arr: T[]) => T[];

const mapFunction: MapFunction = (arr) => {
    let newArray:any[] = []
    if(!arr.length){
        return []
    }
    for(let i =0; i<arr.length; i++){
        newArray.push(arr[i])
    }
    return newArray
}

console.log(mapFunction([3,5,7]))
console.log(mapFunction([]))
console.log(mapFunction(['apple', 'mango', 'chickoo']))

// [2]

const map = <T, U>(array: T[], func : (item: T)=> U) => {
    if(array.length === 0) return array

    let result = []

    for(let i=0; i< array.length; i++){
        result[i] = func(array[i])
    }

    return result
}

const converter = <T>(item:T ):T => item

console.log(map([3,5,7], converter))
console.log(map([],converter))
console.log(map(['apple', 'mango', 'chickoo'],converter))