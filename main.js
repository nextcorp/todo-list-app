const main = document.querySelector(".main")
const content = main.querySelector(".content")
const addButton = main.querySelector(".tools__new-project")

const overlay = document.querySelector(".overlay")
const addItemElement = overlay.querySelector(".add-item")

const addCancel = addItemElement.querySelector(".add-item__cancel-button")
const addConfirm = addItemElement.querySelector(".add-item__confirm-button")

let list = []

function saveList() {
    localStorage.setItem("todos", JSON.stringify(list))
}

function addEntry() {
    //prettier-ignore
    const fullName = addItemElement.querySelector(`input[name="fullname"]`).value
    //prettier-ignore
    const dateEnd = addItemElement.querySelector(`input[name="end-date"]`).value
    const priority = "regular"
    const status = "undone"

    const today = new Date()

    const dateEndObj = new Date(dateEnd)

    //prettier-ignore
    const dateStart = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

    //prettier-ignore
    const dateEndFormatted = `${dateEndObj.getDate()}/${dateEndObj.getMonth() + 1}/${dateEndObj.getFullYear()}`

    const newObj = {
        fullName: fullName,
        status: status,
        priority: priority,
        start: dateStart,
        end: dateEndFormatted,
    }

    list.push(newObj)

    hideAddItemElement()
    render(list)
    updateButtons()
    saveList()
}

function hideAddItemElement() {
    overlay.classList.add("hidden")
    addItemElement.classList.add("hidden")
}

function showAddItemElement() {
    overlay.classList.remove("hidden")
    addItemElement.classList.remove("hidden")
}

function delEntry(id) {
    list.splice(id, 1)
    render(list)
    updateButtons()
    saveList()
}

function updateButtons() {
    const allEdit = content.querySelectorAll(".edit-btn")
    const allDelete = content.querySelectorAll(".del-btn")

    allDelete.forEach((e) => {
        e.addEventListener("click", () => delEntry(e.dataset.id))
    })
}

function template(id, obj) {
    return `<div class="item">
    <span class="state ${obj.status}"></span>
    <div class="item-info">
        <p class="item-info__name">${obj.fullName}</p>
        <p class="item-info__date">${obj.end}</p>
    </div>
    <button class="edit-btn" data-edit-id=${id}><i class="fa-solid fa-pencil"></i></button>
    <button class="del-btn" data-del-id=${id}><i class="fa-solid fa-trash-can"></i></button>
    </div>
    `
}

function render(list) {
    let container = ""
    list.forEach((e, i) => (container += template(i, e)))
    content.innerHTML = container
}

/*async*/ function loadList() {
    //const resp = await fetch("./data.json")
    //const data = await resp.json()

    const todos = localStorage.getItem("todos")
    if (todos) {
        list = JSON.parse(todos)
    }
    render(list)
    updateButtons()
}

document.addEventListener("DOMContentLoaded", loadList)

addButton.addEventListener("click", showAddItemElement)
addCancel.addEventListener("click", hideAddItemElement)
addConfirm.addEventListener("click", addEntry)
