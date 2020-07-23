const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve(5), 3000);
});

promise.then(() => new Promise((resolve, reject) => {
	setTimeout(() => resolve(50), 3000);
})).then(
	data => console.log("Promise value:", data)
).catch(
	err => console.log("Error value:", err)
);

