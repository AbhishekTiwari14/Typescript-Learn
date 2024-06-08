//Type assertion or type casting

type one = string;
type two = number | string;
type three = 'hello';

//convert to more or less specefic
let a : one = 'hello';
let b = a as two; //less specefic: b can be a number or string (currently, b = 'hello')
b = 24;
let c =a as three; //more specefic

//angular bracket syntax(does not work in tsx file)
let d = <string> 'rafa';
let e = <one> 'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat') : string|number => {
    if(c === 'add') return a+b;
    return '' + a + b;
}

let ans: string = addOrConcat(2,9,'concat'); //error bcoz fxn. may return number or string (as inferred by TS) but here we have explicitly give ans type = string, so to overrule TS and typecast ans, we can use 'as'

let jawab: string = addOrConcat(2,9,'concat') as string; //no error
//do so only if you are sure of type of the variable typecasted
let val: string = addOrConcat(2,9,'concat') as number; //error

//double casting or force casting : to avoid TS error, first convert to type unknown(similar to any but can be used only for this purpose)
10 as string ; //gives error
(10 as unknown) as string; //no error //force casting
 
//DOM
const img = document.getElementById('myImg') as HTMLImageElement;
