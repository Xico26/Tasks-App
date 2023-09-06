const tasksListDiv = document.querySelector("#tasksListDiv")
const inputBox = document.querySelector("#taskName")
const inputBtn = document.querySelector("#inputBtn")
const inputForm = document.querySelector("#inputForm")
const deleteBtn = document.querySelector("#deleteBtn")

let taskNo

if (!localStorage.getItem("taskNo")) {
    taskNo = 1
} else {
    taskNo = parseInt(localStorage.getItem("taskNo"))
}

const getTasks = function () {
    for (let i = 1; i < taskNo;  i++) {
        console.log(i)
        let task = localStorage.getItem(i)
        createTask(task)
    }
}

const createTask = function (task) {
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("bg-white", "w-1/2", "mx-auto", "m-2", "p-2", "rounded", "outline", "outline-1", "outline-slate-400", "text-black")
    const taskP = document.createElement("span")
    taskP.innerText = task
    taskDiv.append(taskP)
    tasksListDiv.append(taskDiv)
}

/* const editTask = function() {
    const taskNo = 
} */

window.onload = getTasks

inputForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let task = inputBox.value
    createTask(task)
    localStorage.setItem(taskNo, task)
    taskNo += 1
    localStorage.setItem("taskNo", taskNo)
    inputBox.value = ""
})

deleteBtn.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})

