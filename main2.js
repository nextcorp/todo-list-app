import { createTemplate, render } from "./render.js"
import { showOverlay, hideOverlay } from "./overlay.js"
import { hideAddElement, showAddElement } from "./add.js"
import { showEditElement, hideEditElement } from "./edit.js"
import { getAllRows, addRow, update, delRow } from "./apis.js"

const main = document.querySelector(".main")
const content = main.querySelector(".content")

const overlay = document.querySelector(".overlay")
const addItemElement = overlay.querySelector(".add-item")

const editElement = overlay.querySelector(".edit-item")

const addButton = main.querySelector(".tools__new-project")
const addCancel = addItemElement.querySelector(".add-item__cancel-button")
const addConfirm = addItemElement.querySelector(".add-item__confirm-button")
const editElementConfirm = editElement.querySelector(
    ".edit-item__confirm-button"
)

let list = []

function addButtonHandler() {
    showOverlay(overlay)
    showAddElement(addItemElement)
}

function addConfirmButtonHandler() {
    //prettier-ignore
    const fullName = addItemElement.querySelector(`input[name="fullname"]`).value
    //prettier-ignore
    const dateEnd = addItemElement.querySelector(`input[name="end-date"]`).value
    const priority = "normal"
    const status = "undone"
    const today = new Date()
    const todayFormatted = `${today.getFullYear()}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`
    const addObjLayout = {
        fullName: fullName,
        status: status,
        priority: priority,
        start: todayFormatted,
        end: dateEnd,
    }

    addRow(addObjLayout)
    hideAddElement(addItemElement)
    hideOverlay(overlay)
    load()
}

function addCancelButtonHandler() {
    hideAddElement(addItemElement)
    hideOverlay(overlay)
}

function editButtonHandler() {}
function editConfirmButtonHandler() {}

function deleteButtonHandler() {}

async function load() {
    list = await getAllRows()
    render(list, content)
}

addButton.addEventListener("click", addButtonHandler)
addCancel.addEventListener("click", addCancelButtonHandler)
addConfirm.addEventListener("click", addConfirmButtonHandler)
editElementConfirm.addEventListener("click", editConfirmButtonHandler)
document.addEventListener("DOMContentLoaded", load)
