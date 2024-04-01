import { createTemplate, render } from "./render.js"
import { showOverlay, hideOverlay } from "./overlay.js"
import { hideAddElement, showAddElement } from "./add.js"
import { showEditElement, hideEditElement } from "./edit.js"
import { getRow, updRow } from "./apis2.js"

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
    const newObj = {
        fullName: fullName,
        status: status,
        priority: priority,
        start: todayFormatted,
        end: dateEnd,
    }

    hideAddElement(addItemElement)
    hideOverlay(overlay)
    list.push(newObj)
    updRow(list)
    render(list, content)
}

function addCancelButtonHandler() {
    hideAddElement(addItemElement)
    hideOverlay(overlay)
}

function editButtonHandler() {}
function editConfirmButtonHandler() {}

function deleteButtonHandler() {}

async function load() {
    list = await getRow()
    render(list, content)
}

/*
todo: 
1. solve list duplication
2. solve id conflict between db and list index
3. update db less frequently, use list array for temp changes, update db on add, edit, delete
*/

addButton.addEventListener("click", addButtonHandler)
addCancel.addEventListener("click", addCancelButtonHandler)
addConfirm.addEventListener("click", addConfirmButtonHandler)
editElementConfirm.addEventListener("click", editConfirmButtonHandler)
document.addEventListener("DOMContentLoaded", load)
