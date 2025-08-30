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
    
console.log(userStatus_1);

