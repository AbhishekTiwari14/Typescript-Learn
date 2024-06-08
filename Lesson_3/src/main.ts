// //Arrays: type is assigned to the array(not individual elements)
let a = ['ab', 'vd', 'fsda'] // a = stringArr[]
a[1] = 'dasc';// a[1] becomes 'dasc'
a[1] = 23; //error

let b = ['av', 'asfa', 24]; // b: (string | number)[]
b[0] = 12; //no error
b.push('dasd');

let c: string[] = ['afca', 'afs']
b = a;
a = b; //error

let d = ['ab', 12, true]; //d: (string | number | boolean)[]

//Tuples: type is assigned to each element of array
let myTuple: [string, number, boolean] = ['afc', 12, false]; //myTuple: [string, number, boolean]
let similarArr = ['adas', 23, true];
myTuple = similarArr; //error: bcoz similarArr may or may not be in the same format as myTuple
myTuple[1] = 32; 

//Objects: type is defined to individual prop values

let myObj = {
    name: "Abhishek",
    age: 22,
    loggedIn: true
}

myObj.name = 232; //error;

// //Defining an object class (with pre-defined prop types)
type Human = {
    name: string, 
    age: number,
    loggedIn?: boolean  //loggedIn is optional prop
    city?: string 
}
//object can also be defined using "interface" as:
interface Worker{
    username: string,
    experience: number
}

let user : Human = {
    name: 'afa',
    age: 23,
    loggedIn: true,
    city: 'faf'
}

// //method called on an optional prop will throw error(even if it exists in the object) bcoz it may be undefined, to bypass it, use optional chaining
user.city.toUpperCase() //error
user.city?.toUpperCase() //no error

// function with defined object as parameter
const greetHuman = (human: Human) => {
    console.log(`Hi! ${human.name}`);
}
greetHuman(user); //`Hi! afa`

//Enums: just as Serial nos.; not a type-addition, but feature addition on runtime
enum Grade{
    A = 8, //by-default = 0
    E,      // A+1
    I,      // A+2 
    O,     // A+3
    U      // A+4
}

console.log(Grade.A, Grade.E, Grade.I); // 8 9 10

//Type Aliases: 
type stringOrNum = string | number
let score: stringOrNum; //smae as let score: string|number

//Literal Types: assigning value(s) and not type(s)
let userName: 'John' | 'Jonatthen' | 'Trott'
userName = 'Aman' //error
userName = 'Trott' //no error