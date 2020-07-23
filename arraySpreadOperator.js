let data = [1, 2, 3, 4];
let list = [5, 6, 7]
//const result = data.concat([5, 6]);

const cloned = [...data, ...list, 8, 9]
console.log(cloned);


const obj = {
    id: 123,
    name: 'name'
}

const preferences = { color: 'red', language: 'javascript'};
const merged = { ...obj, ...preferences, pet: 'dog'};
//const newClone = Object.assign({}, obj, preferences);
merged.id = 456;

console.log(obj);
console.log(merged);
