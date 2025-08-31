// TASK ONE

let task_1 = {
    title_1: prompt("Enter task 1 title:"),
    desc_1: prompt("Enter task 1 description:"),
    status_1: prompt("Enter task 1 status (todo, doing, done):").toLowerCase(), // Task 1 object with user inputs
};

while (task_1.status_1 !== "todo" && task_1.status_1 !== "doing" && task_1.status_1 !== "done") {
    alert("Invalid status. Please enter todo, doing, or done.");
    task_1.status_1 =prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
} // Valid status check loop

console.log(task_1);

// TASK TWO

let task_2 = {
    title_2: prompt("Enter task 2 title:"),
    desc_2: prompt("Enter task 2 description:"),
    status_2: prompt("Enter task 2 status (todo, doing, done):").toLowerCase(),
}; // Task 2 object with user inputs

while (task_2.status_2 !== "todo" && task_2.status_2 !== "doing" && task_2.status_2 !== "done") {
    alert("Invalid status. Please enter todo, doing, or done.");
    task_2.status_2 = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
} // Valid status check loop

console.log(task_2);

// Conditional alert
if (task_1.status_1 !== "done" && task_2.status_2 !== "done") {
     alert("No tasks completed, let's get to work."); 
}

// Conditional logging 
if (task_1.status_1 === "done") {
    console.log(`Title: ${task_1.status_1}, Status: ${task_1.status_1}`);
}
if (task_2.status_2 === "done") {
    console.log(`Title: ${task_2.status_2} Status: ${task_2.status_2}`);
}