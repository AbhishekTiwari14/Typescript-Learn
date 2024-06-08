class coder{
    constructor(public name: string, public age: number, public lang: string){
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
}
const Ab = new coder("Abhishek", 22, "Typescript");

class webDev extends coder{
    constructor(public name: string, public age: number, public lang: string){
        super(name, age, lang);
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    
}