//(1) Partial

interface Assignment {
    id: string,
    title: string,
    verified?: boolean
}

const assign1: Assignment = {
    id: "compsci123",
    title: "Final Project",
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>) : Assignment => {
    return { ...assign, ...propsToUpdate };
}

console.log(updateAssignment(assign1, { title: "first Project" })); //{id: 'compsci123', title: 'first Project'}

/////////////////////////////////////
// (2) Required

const checkAssignment = (assign: Required<Assignment>) => { 
    console.log(assign);
}

// checkAssignment(assign1); //error bcoz assign1 does not have prop 'verified'

const assign2 = {id: "fdasdf", title: "last project", verified: false};
checkAssignment(assign2); // {id: 'fdasdf', title: 'last project', verified: false}

//////////
// (3) Readonly
type Mand = Readonly<Assignment>;
const assign3: Mand  = {id: "adgf", title: "Middle project"};
// assign3.id = "niafia"; //error
// assign3.title = "End project"; //error

////////////////////////////////
// (4) Record

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

// (5) Pick & (6) Omit
const pickSomething: Pick<Assignment, "id" | "verified"> = {
    id: "3213",
    verified: true
} 

type omitFew = Omit<Assignment, "id" | "title"> // => type omitFew = { verified?: boolean | undefined; }
const assign4 : omitFew = {
    verified: false
}

// (7) Exclude & Extract
type Exc = Exclude<LetterGrades, "A" | "U"> // type Exc = "B" | "C" | "D"
type Ext = Extract<LetterGrades, "A" | "B" | "C"> // type Exc = "A" | "B" | "C"

// (8) ReturnType
const f1 = (username: string, password: number) => {
    return {username, password};
}
type RT = ReturnType<typeof f1>; 

// (9) Parameters 
type PRM = Parameters<typeof f1>; //extracts paramaters/args. of a fxn. as a tuple[];

// (10) Awaited - helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))