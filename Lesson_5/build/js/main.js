"use strict";
//Type assertion or type casting
//convert to more or less specefic
let a = 'hello';
let b = a; //less specefic: b can be a number or string (currently, b = 'hello')
b = 24;
let c = a; //more specefic
//angular bracket syntax(does not work in tsx file)
let d = 'rafa';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let ans = addOrConcat(2, 9, 'concat'); //error bcoz fxn. may return number or string (as inferred by TS) but here we have explicitly give ans type = string, so to overrule TS and typecast ans, we can use 'as'
let jawab = addOrConcat(2, 9, 'concat'); //no error
//do so only if you are sure of type of the variable typecasted
let val = addOrConcat(2, 9, 'concat'); //error
//double casting or force casting : to avoid TS error, first convert to type unknown(similar to any but can be used only for this purpose)
10; //gives error
10; //no error //force casting
//DOM
const img = document.getElementById('myImg');
