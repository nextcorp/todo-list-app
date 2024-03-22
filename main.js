const main = document.querySelector(".main")
const content = main.querySelector(".content")
const addButton = main.querySelector(".tools__new-project")

const overlay = document.querySelector(".overlay")
const addItemElement = overlay.querySelector(".add-item")

const addCancel = addItemElement.querySelector(".add-item__cancel-button")
const addConfirm = addItemElement.querySelector(".add-item__confirm-button")

const editElement = overlay.querySelector(".edit-item")
const editElementName = editElement.querySelector(".edit-item__name")
const editElementEndDate = editElement.querySelector(".edit-item__end-date")
const editElementPriority = editElement.querySelector(".edit-item__priority")
const editElementStatus = editElement.querySelector(".edit-item__status")

const editElementConfirm = editElement.querySelector(
    ".edit-item__confirm-button"
)

let list = []

function saveList() {
    localStorage.setItem("todos", JSON.stringify(list))
}

function editEntry() {
    const updateId = parseInt(editElement.dataset.id)
    list[updateId].priority = editElementPriority.value
    list[updateId].status = editElementStatus.value

    editElement.dataset.id = ""
    editElementName.value = ""
    editElementEndDate.value = ""
    editElementPriority.value = ""
    editElementStatus.value = ""

    editElement.classList.add("hidden")
    overlay.classList.add("hidden")

    sortStatusElement.value = "all"
    sortPriorityElement.value = "all"

    render(list)
    updateButtons()
    saveList()
}

function editButtonHandler(id) {
    editElement.dataset.id = id
    editElementName.value = list[id].fullName

    const formattedDate = list[id].end.split("/")

    editElementEndDate.value = `${formattedDate[2]}-${formattedDate[1].padStart(
        2,
        "0"
    )}-${formattedDate[0].padStart(2, "0")}`
    editElementPriority.value = list[id].priority
    editElementStatus.value = list[id].status

    overlay.classList.remove("hidden")
    editElement.classList.remove("hidden")
}

function addEntry() {
    //prettier-ignore
    const fullName = addItemElement.querySelector(`input[name="fullname"]`).value
    //prettier-ignore
    const dateEnd = addItemElement.querySelector(`input[name="end-date"]`).value
    const priority = "normal"
    const status = "undone"

    const today = new Date()

    const dateEndObj = new Date(dateEnd)

    //prettier-ignore
    const dateStart = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

    //prettier-ignore
    const dateEndFormatted = `${dateEndObj.getDate().toString().padStart(2, "0")}/${(dateEndObj.getMonth() + 1).toString().padStart(2, "0")}/${dateEndObj.getFullYear()}`

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

    sortStatusElement.value = "all"
    sortPriorityElement.value = "all"
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

    allEdit.forEach((e) => {
        e.addEventListener("click", () => editButtonHandler(e.dataset.id))
    })
}

function template(id, obj) {
    return `<div class="item">
    <span class="state ${obj.status}"></span>
    <div class="item-info">
        <p class="item-info__name">${obj.fullName}</p>
        <p class="item-info__date">${obj.end}</p>
    </div>
    <button class="edit-btn" data-id=${id}><i class="fa-solid fa-pencil"></i></button>
    <button class="del-btn" data-id=${id}><i class="fa-solid fa-trash-can"></i></button>
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
editElementConfirm.addEventListener("click", editEntry)
