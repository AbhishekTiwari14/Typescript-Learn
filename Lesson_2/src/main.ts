//basic data types:
//number, string, boolean, any, union, RegExp

//any: can be reassigned to different data type
let a : any;
a = 12;
a = "Hello"; //no error

//union type: DT1|DT2 can hold/be reassigned DT1 or DT2 
let b : number|string;
b = 2;
b = "5"; 
let c : RegExp = /\w+/g