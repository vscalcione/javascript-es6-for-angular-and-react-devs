const arrayFilter = () => {
    const users = [
        { "id": 1, "name": "Silvia", "age": 10, "gender": "F", "city": "Gorizia" },
        { "id": 2, "name": "Marco", "age": 30, "gender": "M", "city": "Trieste" },
        { "id": 3, "name": "Matteo", "age": 6, "gender": "M", "city": "Pordenone" },
        { "id": 4, "name": "Francesca", "age": 40, "gender": "F", "city": "Gorizia" },
    ];
    
    const newList = users.filter(user => user.age > 18).map(user => user.id);
    
    console.log(newList);
}

const arrayFind = () => {
    const users = [
        { "id": 10, "name": "Silvia", "age": 10, "gender": "F", "city": "Gorizia" },
        { "id": 20, "name": "Marco", "age": 30, "gender": "M", "city": "Trieste" },
        { "id": 30, "name": "Matteo", "age": 6, "gender": "M", "city": "Pordenone" },
        { "id": 40, "name": "Francesca", "age": 40, "gender": "F", "city": "Gorizia" },
    ];
    
    const element = 30;
    
    // const index = users.findIndex(user => user.id === element)
    // users.splice(index, 1);
    
    const user = users.find(user => user.id === element)
    console.log(user);
}

const arrayMap = () => {
    const users = [
        { "id": 1, "name": "Silvia", "age": 10, "gender": "F", "city": "Gorizia" },
        { "id": 2, "name": "Marco", "age": 30, "gender": "M", "city": "Trieste" },
        { "id": 3, "name": "Matteo", "age": 6, "gender": "M", "city": "Pordenone" },
        { "id": 4, "name": "Francesca", "age": 40, "gender": "F", "city": "Gorizia" },
    ];    
    const newList = users.map(user => `${user.name} (${user.age})`);
    console.log(newList);
}

const arraySpreadOperator = () => {
    let data = [1, 2, 3, 4];
    let list = [5, 6, 7]
    //const result = data.concat([5, 6]);

    const cloned = [...data, ...list, 8, 9]
    console.log(cloned);

    const obj = { id: 123, name: 'name' }

    const preferences = { color: 'red', language: 'javascript'};
    const merged = { ...obj, ...preferences, pet: 'dog'};

    //const newClone = Object.assign({}, obj, preferences);
    merged.id = 456;

    console.log(obj);
    console.log(merged);
}

// arrayFilter();
// arrayFind();
// arrayMap();
arraySpreadOperator();