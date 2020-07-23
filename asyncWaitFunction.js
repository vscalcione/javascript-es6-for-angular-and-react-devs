// Test this on console of your browser
async function asyncFunction() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

asyncFunction().then(console.log);