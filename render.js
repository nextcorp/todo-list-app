function createTemplate(obj, id, edHand, delHand) {
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
    itemInfoDate.className = "item-info__date"
    itemInfoDate.textContent = obj.end

    itemInfo.append(itemInfoName)
    itemInfo.append(itemInfoDate)

    item.append(itemInfo)

    const editBtn = document.createElement("button")
    editBtn.className = "edit-btn"
    editBtn.setAttribute("data-id", id)

    const editIcon = document.createElement("i")
    editIcon.classList.add("fa-solid", "fa-pencil")

    editBtn.append(editIcon)

    const delBtn = document.createElement("button")
    delBtn.className = "del-btn"
    delBtn.setAttribute("data-id", id)

    const delIcon = document.createElement("i")
    delIcon.classList.add("fa-solid", "fa-trash-can")

    delBtn.append(delIcon)

    editBtn.addEventListener("click", () => edHand(id))
    delBtn.addEventListener("click", () => delHand(id))

    item.append(editBtn)
    item.append(delBtn)

    return item
}

function render(from, to, edHand, delHand) {
    to.querySelectorAll(".item").forEach((e) => e.remove())
    from.forEach((e) =>
        to.append(createTemplate(e, from.indexOf(e), edHand, delHand))
    )
}

export { createTemplate, render }
