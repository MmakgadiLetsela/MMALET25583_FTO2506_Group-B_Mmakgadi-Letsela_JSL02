// TASK ONE

let title_1 =prompt("Enter task 1 title:")
console.log(title_1);

let desc_1 =prompt("Enter task 1 description:")
console.log(desc_1);

let status_1 =prompt("Enter task 1 status (todo, doing, done):").toLowerCase();

while (status_1 !== "todo" && status_1 !== "doing" && status_1 !== "done") {
    alert("Invalid status. Please enter todo, doing, or done.");
    status_1 =prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
}
console.log(status_1);
console.log(`Title: ${title_1}, Status: ${status_1}`);

// TASK TWO
let title_2 =prompt("Enter task 2 title:")
console.log(title_2);

let desc_2 =prompt("Enter task 2 description:")
console.log(desc_2);

let status_2 =prompt("Enter task 2 status (todo, doing, done):").toLowerCase();

while (status_2 !== "todo" || status_2 !== "doing" || status_2 !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status_2 =prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
}

console.log(status_2);
console.log(`Title: ${title_2}, Status: ${status_2}`);
