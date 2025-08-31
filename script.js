// TASK ONE

let title_1 =prompt("Enter task 1 title:")
console.log(title_1);

let desc_1 =prompt("Enter task 1 description:")
console.log(desc_1);

let status_1 =prompt("Enter task 1 status (todo, doing, done):").toLowerCase();

while (status_1 !== "todo" || status_1 !== "doing" || status_1 !== "done") {
status_1 =alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
}
status_1 =prompt("Enter task 1 status (todo, doing, done):").toLowerCase();

console.log(status_1);
console.log(`Title: ${title_1}, Status: ${status_1}`);

// TASK TWO
