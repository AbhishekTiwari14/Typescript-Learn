"use strict";
//(1) Partial
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const assign1 = {
    id: "compsci123",
    title: "Final Project",
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
console.log(updateAssignment(assign1, { title: "first Project" })); //{id: 'compsci123', title: 'first Project'}
/////////////////////////////////////
// (2) Required
const checkAssignment = (assign) => {
    console.log(assign);
};
// checkAssignment(assign1); //error bcoz assign1 does not have prop 'verified'
const assign2 = { id: "fdasdf", title: "last project", verified: false };
checkAssignment(assign2); // {id: 'fdasdf', title: 'last project', verified: false}
const assign3 = { id: "adgf", title: "Middle project" };
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
// (5) Pick & (6) Omit
const pickSomething = {
    id: "3213",
    verified: true
};
const assign4 = {
    verified: false
};
// (8) ReturnType
const f1 = (username, password) => {
    return { username, password };
};
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
