// Test this on console of your browser
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		title: 'Lorem ipsum',
		content: 'Textual content',
		author: 'Me'
	})
}).then(response => response.json())
.then(data => console.log(data))
