//Functions

let sum = (a: number, b: number): void => {  //void => fxn. not return anything 
    console.log(a+b);
    
} 

//Defining fxn. type(fxn. class)

type mathFxn = (a: number, b: number) => number
//same as 
// interface matFxn {
//    (a: number, b: number) : number
//}

let multiply : mathFxn = function(c, d) {
    return c*d;
}

//Rest parameters
const sumAll = (...nums: number[]) : number => {
    return nums.reduce((acc, curr) =>  acc+curr);
}

//'never' TS type: specail cases, ex1) function explicitly returning error, ex2) infinite loop in a function => TS infers return type as 'never'  
const a = () => {
    let i: number  =  1;
    while (true) {
        i++;
        //this fxn. is returning never, so end this infinite loop   
        if(i>100) return;      
    }
}

const createError = (errMsg: string) : never => {
    throw new Error(errMsg)
}  

const check = (a: number, b: number) : boolean => {
    if(a>b) return true;
    if(a<=b) return false;
    return createError('This should never happen');
}
