const f1 = <T> (arg : T) : T => {
    return arg;
}

//////////////////////////////

// isObj is a generic fxn. that checks if the given arg is an object or not.

const isObj = <T> (arg: T) : boolean => {
    return typeof arg == 'object' && !Array.isArray(arg) && arg!= null;
}

console.log(isObj(0)); //false
console.log(isObj([1,3,4])); //false
console.log(isObj({a: "Abhi", b: 32})); //true

//.....................................................

interface HasID {
    id: number
}

// creating a generic fxn. which takes 2 args: (1) 'users': ie, an array of objects; & (2) 'key': ie, a prop in each object of users array(it must be present in each object); and we return an array of 'values' of all those keys/props present in each object of the users array       

const getUsersProperty = <T extends HasID, K extends keyof T> (users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
}
//T extends HasID => in users array, each object must have key 'id' and its value = some no.; 
// K extends keyof T => key(Arg) must be a key/prop in each object of users array;
// T[K][] => fxn. returns an array whose each value is of type T[K] 

//demo users data
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "username")); // ['Bret', 'Antonette']

///////////////////////////////////////////////////

