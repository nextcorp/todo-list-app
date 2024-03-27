function createTemplate(obj) {
    const item = document.createElement("div")
    item.className = "item"

    const span = document.createElement("span")
    span.classList.add("state", obj.status)

    item.append(span)

    const itemInfo = document.createElement("div")
    itemInfo.className = "item-info"

    const itemInfoName = document.createElement("p")
    itemInfoName.className = "item-info__name"
    itemInfoName.textContent = obj.fullName

    const itemInfoDate = document.createElement("p")
    itemInfoName.className = "item-info__date"
    itemInfoName.textContent = obj.end

    itemInfo.append(itemInfoName)
    itemInfo.append(itemInfoDate)

    item.append(itemInfo)

    const editBtn = document.createElement("button")
    editBtn.setAttribute("data-id", obj.id)

    const editIcon = document.createElement("i")
    editIcon.classList.add("fa-solid", "fa-pencil")

    editBtn.append(editIcon)

    const delBtn = document.createElement("button")
    delBtn.setAttribute("data-id", obj.id)

    const delIcon = document.createElement("i")
    delIcon.classList.add("fa-solid", "fa-trash-can")

    delBtn.append(delIcon)

    // new edit button function name
    editBtn.addEventListener("click", () => editButtonHandler(obj.id))
    delBtn.addEventListener("click", () => deleteEntry(obj.id))

    item.append(editBtn)
    item.append(delBtn)

    return item
}

function render(from, to) {
    from.forEach((e) => to.append(createTemplate(e)))
}

export { createTemplate, render }
