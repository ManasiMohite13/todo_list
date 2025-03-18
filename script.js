const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Unicode for '×' (delete icon)
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save tasks after adding
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save tasks after checking/unchecking
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();// Save tasks after deleting
    }
}, false);

// Function to save tasks in localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Function to load tasks from localStorage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//Loads the task when the page loads
showTask();