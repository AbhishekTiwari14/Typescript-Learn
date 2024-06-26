class coder{
    constructor(public name: string, public age: number, private lang: string){
        this.name = name;
        this.age = age;
        this.lang = lang;
    }

    public getLang(){
        return `${this.name} knows ${this.lang} language`
    }
}
const Abhishek = new coder("Abhishek", 22, "Typescript");
console.log(Abhishek.getLang()); // Abhishek knows Typescript language


class webDev extends coder{
    constructor(public skill: string, name: string, age: number, lang: string){
        super(name, age, lang);
        this.skill = skill;
    }

    public getAge(){
        return `Age: ${this.age}`;
    }
}

///////////////////////////////////////////////
 
interface Musician {
    name: string, 
    instrument: string,
    plays(action: string): string
}

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name;
        this.instrument = instrument;
    }

    plays(action: string){
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Jimmy = new Guitarist("Anderson", "guitar");
console.log(Jimmy.plays("strums")); // Anderson strums the guitar

//////////////////////////////////////////////////

class StaticKW{
    static count : number = 0;
    public id: number;
    public getCount() : number {
        return StaticKW.count;
    }
    constructor(){      
        this.id = ++StaticKW.count;
    }
}

const a = new StaticKW();
const b = new StaticKW();

console.log(a.id); // 1
console.log(b.id); // 2
console.log(a.getCount()); // 2
console.log(b.getCount()); // 2
console.log(StaticKW.count); // 2

///////////////////////////////////////////////

