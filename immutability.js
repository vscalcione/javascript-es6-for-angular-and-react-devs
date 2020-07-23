const users = [
    { "id": 10, "name": "Silvia", "age": 10, "gender": "F", "city": "Gorizia" },
    { "id": 20, "name": "Marco", "age": 30, "gender": "M", "city": "Trieste" },
    { "id": 30, "name": "Matteo", "age": 6, "gender": "M", "city": "Pordenone" },
    { "id": 40, "name": "Francesca", "age": 40, "gender": "F", "city": "Gorizia" },
];

const firstMethod = () => {
    // add
    users.push({});

    // delete
    users.splice(2, 1);

    // edit
    users[0].name = 'Maria';

    console.log(users);
}

// add
const add = () => {
    const user = { id: 50, name: 'Mario'};
    const newList = [...users, user];
    console.log(newList);
}

// delete
const del = () => {
    const newId = 40;
    newList = users.filter(u => u.id !== newId)
    console.log(newList);
}

const edit = () => {
    const updatedUser = { id: 20, name: 'Ciccio', age: 25};
    newList = users.map(u => u.id === updatedUser.id ? {...u, ...updatedUser} : u);
    console.log(newList);
}

add();
del();
edit();