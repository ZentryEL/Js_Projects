// creates an empty array to hold the future to-do list
let toDoList = [];
const { get } = require('http');
const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/** Adds an Item into the to do list */
function addToDo(item) {
    toDoList.push(item);
}


/** Returns the current to-do list */
function getToDoList() {
    return toDoList;
}

/** Removes an item from the to-do list */
function deleteTodo (item) {
    const index = toDoList.findIndex (t => t.text === item);
    if (index !== -1) {
        toDoList.splice (index,1);
    }
}

function markComplete(item) {
    const task = toDoList.find(t => t.text === item);
    if (task) {
        task.completed = true;
    }
}

// Example usage:
readLine.question("Welcome to you to do lists!\n" +
    "1. Display To Do Lists \n" +
    "2. Add a task \n" +
    "3. Delete a task \n" +
    "4. Mark task complete\n" +
    "Choose an option: ", (choice) => {
    if (choice === "1") {
        console.log (getToDoList());
        readLine.close();
    }
    else if (choice === "2") {
        readLine.question ("Enter task to add: ", (task) => {
            addToDo(task);
            console.log (getToDoList());
            readLine.close();
        });
    }
    else if (choice === "3"){
        readLine.question ("Enter task to be deleted:", (task) => {
            deleteTodo(task);
            console.log (getToDoList());
            readLine.close();
        })
    }
    else if (choice === "4") {
        readLine.question ("Enter task that is completed: ", (task) => {
            markComplete(task);
            console.log(getToDoList());
            readLine.close();
        })
    }
    else {
        console.log ("Invalid Choice");
        readLine.close();
    }
});