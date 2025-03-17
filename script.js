document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById("list-container");
    const inputBox = document.getElementById("input-box");
    const addButton = document.querySelector("button");

    // Function to toggle checked state
    function toggleTask(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }

    // Add event listener to existing tasks
    listContainer.addEventListener("click", toggleTask);

    // Function to add a new task
    function addTask() {
        if (inputBox.value.trim() === "") return; // Prevent adding empty tasks

        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        inputBox.value = ""; // Clear input field
    }

    // Add event listener for new tasks
    addButton.addEventListener("click", addTask);
});
