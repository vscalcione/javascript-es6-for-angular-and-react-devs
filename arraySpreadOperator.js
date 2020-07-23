let data = [1, 2, 3, 4];
let list = [5, 6, 7]
//const result = data.concat([5, 6]);

const cloned = [...data, ...list, 8, 9]
console.log(cloned);
