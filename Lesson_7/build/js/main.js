"use strict";
//Index Signatures: used when we don't know the object keys but we know shape of the object and we can declare types of keys & values
const a = {
    name: 'Abhi',
    id: 2923
};
let prop = 'id';
console.log(a[prop]); //ERROR: no index signature found  
const b = {
    name: 'Aman',
    id: 2315
};
let prop2 = 'id';
console.log(b[prop]); //no error, works fine
