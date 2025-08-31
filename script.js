// TASK ONE

let task_1 = {
    title_1: prompt("Enter task 1 title:"),
    desc_1: prompt("Enter task 1 description:"),
    status_1: prompt("Enter task 1 status (todo, doing, done):").toLowerCase(),
};

while (status_1 !== "todo" && status_1 !== "doing" && status_1 !== "done") {
    alert("Invalid status. Please enter todo, doing, or done.");
    status_1 =prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
}
console.log(task_1);


// TASK TWO

let task_2 = {
    title_2: prompt("Enter task 2 title:"),
    desc_2: prompt("Enter task 2 description:"),
    status_2: prompt("Enter task 2 status (todo, doing, done):").toLowerCase(),
};
while (status_2 !== "todo" && status_2 !== "doing" && status_2 !== "done") {
    alert("Invalid status. Please enter todo, doing, or done.");
    status_2 = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
}
console.log(task_2);


if (status_1 !== done && status_2 !== done) {
    alert("No tasks completed, let's get to work.");
}
if (status_1 === done || status_2 === done) {
    console.log(Title: "title_1")