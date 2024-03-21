const main = document.querySelector(".main")
const content = main.querySelector(".content")

let list = []

function delEntry(id) {
    list.splice(id, 1)
    render(list)
    updateButtons()
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

async function load() {
    const resp = await fetch("./data.json")
    const data = await resp.json()
    list = data
    render(list)
    updateButtons()
}

document.addEventListener("DOMContentLoaded", load)
