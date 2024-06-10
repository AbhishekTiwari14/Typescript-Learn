"use strict";
class coder {
    constructor(name, age, lang) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getLang() {
        return `${this.name} knows ${this.lang} language`;
    }
}
const Abhishek = new coder("Abhishek", 22, "Typescript");
console.log(Abhishek.getLang()); // Abhishek knows Typescript language
class webDev extends coder {
    constructor(skill, name, age, lang) {
        super(name, age, lang);
        this.skill = skill;
        this.skill = skill;
    }
    getAge() {
        return `Age: ${this.age}`;
    }
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    plays(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Jimmy = new Guitarist("Anderson", "guitar");
console.log(Jimmy.plays("strums")); // Anderson strums the guitar
//////////////////////////////////////////////////
class StaticKW {
    getCount() {
        return StaticKW.count;
    }
    constructor() {
        this.id = ++StaticKW.count;
    }
}
StaticKW.count = 0;
const a = new StaticKW();
const b = new StaticKW();
console.log(a.id); // 1
console.log(b.id); // 2
console.log(a.getCount()); // 2
console.log(b.getCount()); // 2
console.log(StaticKW.count); // 2
///////////////////////////////////////////////
