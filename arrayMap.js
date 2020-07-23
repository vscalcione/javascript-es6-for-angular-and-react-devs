const users = [
    { "id": 1, "name": "Silvia", "age": 10, "gender": "F", "city": "Gorizia" },
    { "id": 2, "name": "Marco", "age": 30, "gender": "M", "city": "Trieste" },
    { "id": 3, "name": "Matteo", "age": 6, "gender": "M", "city": "Pordenone" },
    { "id": 4, "name": "Francesca", "age": 40, "gender": "F", "city": "Gorizia" },
];

const newList = users.map(user => `${user.name} (${user.age})`);

console.log(newList);