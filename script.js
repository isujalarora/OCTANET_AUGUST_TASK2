const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    }
});
