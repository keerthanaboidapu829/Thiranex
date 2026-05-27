let tasks = [];

function addTask(){

    const titleInput = document.getElementById("taskTitle");
    const statusInput = document.getElementById("taskStatus");

    const title = titleInput.value.trim();
    const status = statusInput.value;

    if(title === ""){
        alert("Please enter task title");
        return;
    }

    const task = {
        id: Date.now(),
        title: title,
        status: status
    };

    tasks.push(task);

    displayTasks();

    titleInput.value = "";
}

function displayTasks(){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const taskCard = document.createElement("div");

        taskCard.classList.add("task-card");

        taskCard.innerHTML = `
        
            <h3>${task.title}</h3>

            <div class="status">
                Status: ${task.status}
            </div>

            <div class="buttons">

                <button 
                    class="edit-btn"
                    onclick="editTask(${task.id})"
                >
                    Edit
                </button>

                <button 
                    class="delete-btn"
                    onclick="deleteTask(${task.id})"
                >
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(taskCard);

    });
}

function deleteTask(id){

    tasks = tasks.filter(task => task.id !== id);

    displayTasks();
}

function editTask(id){

    const task = tasks.find(task => task.id === id);

    const newTitle = prompt("Edit Task Title", task.title);

    if(newTitle !== null && newTitle.trim() !== ""){

        task.title = newTitle;

        displayTasks();
    }
}