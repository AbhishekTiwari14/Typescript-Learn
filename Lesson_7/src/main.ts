//Index Signatures: used when we don't know the object keys but we know shape of the object and we can declare types of keys & values

interface obj1{
    name: string,
    id: number
}

const a : obj1 = {
    name: 'Abhi',
    id: 2923
}
let prop: string = 'id';
console.log(a[prop]); //ERROR: no index signature found  

// Declaring index signature:
interface obj2{
    [key: string]: number | string; //all keys of obj2=>strings & values can be number or string
}
const b: obj2 = {
    name: 'Aman',
    id: 2315
}
let prop2: string = 'id';
console.log(b[prop2]); //no error, works fine
