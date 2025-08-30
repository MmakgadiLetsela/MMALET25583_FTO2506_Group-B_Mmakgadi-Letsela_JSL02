// TASK ONE
let title_1 =prompt("Enter task 1 title:")
console.log(title_1);

let desc_1 =prompt("Enter task 1 description:")
console.log(desc_1);

const validStatus =["todo", "doing", "done"];
let userStatus_1 =prompt("Enter task 1 status (todo, doing, done):")
while (userStatus_1 !== validStatus) {
userStatus_1 =alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
}
if (userStatus_1 === validStatus) {
}
console.log(userStatus_1.toLowerCase());

// TASK TWO
let title_2 =prompt("Enter task 2 title:")
console.log(title_2);

let desc_2 =prompt("Enter task 2 description:")
console.log(desc_2);

let userStatus_2 =prompt("Enter task 2 status (todo, doing, done):")
while (userStatus_2 !== validStatus) {
userStatus_2 =alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
}
if (userStatus_2 === validStatus) {
}
console.log(userStatus_2.toLowerCase);