// creates an empty array to hold the future to-do list
let toDoList = [];


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
    // find the index of the item to be deleted
    const index = toDoList.indexOf(item);
    // remove the item if it exists
    if (index !== -1) {
        toDoList.splice(index, 1);
    }
    else {
        console.log(`Item "${item}" not found in the to-do list.`);
    }
}

function markComplete(item) {
    const index = toDoList.indexOf(item);
    if (index !== -1) {
        toDoList[index] = `${item} (completed)`;
    }
    else {
        console.log(`Item "${item}" not found in the to-do list.`);
    }
}

// Example usage:
addToDo("Buy groceries");
addToDo("Clean the house");
console.log(getToDoList()); // ["Buy groceries", "Clean the house"] 
markComplete("Buy groceries");
console.log(getToDoList()); // ["Buy groceries (completed)", "Clean the house"]
deleteTodo("Clean the house");
console.log(getToDoList()); // ["Buy groceries (completed)"]
