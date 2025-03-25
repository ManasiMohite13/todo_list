const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dueDateInput = document.getElementById("due-date");
const priorityLevel = document.getElementById("priority-level");

// Add Task Function
function addTask() {
    const task = inputBox.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityLevel.value;

    if (task === "") {
        alert("⚠️ Please enter a task!");
        return;
    }

    if (dueDate === "") {
        alert("⚠️ Please select a due date!");
        return;
    }

    // Create Task List Item
    const li = document.createElement("li");
    li.classList.add(priority); // Add priority class
    li.innerHTML = `
        ${task} 
        <div class="due-date">Due: ${dueDate}</div>
    `;

    // Create Delete Button
    const span = document.createElement("span");
    span.innerHTML = "\u00d7"; // '×' symbol
    li.appendChild(span);

    // Add to List
    listContainer.appendChild(li);

    // Reset Inputs
    inputBox.value = "";
    dueDateInput.value = "";
    priorityLevel.value = "low";

    saveData();
}

// Toggle Checked or Delete
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save to Local Storage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Show Saved Tasks on Load
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

showTasks();
