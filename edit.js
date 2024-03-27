function showEditElement(list, id, editElement) {
    editElement.classList.remove("hidden")
    editElement.dataset.id = id

    const editElementName = editElement.querySelector(".edit-item__name")
    const editElementEndDate = editElement.querySelector(".edit-item__end-date")
    const editElementPriority = editElement.querySelector(
        ".edit-item__priority"
    )
    const editElementStatus = editElement.querySelector(".edit-item__status")

    editElementName.value = list[id].fullName
    editElementEndDate.value = list[id].end
    editElementPriority.value = list[id].priority
    editElementStatus.value = list[id].status
}

function hideEditElement(editElement) {
    const editElementName = editElement.querySelector(".edit-item__name")
    const editElementEndDate = editElement.querySelector(".edit-item__end-date")
    const editElementPriority = editElement.querySelector(
        ".edit-item__priority"
    )
    const editElementStatus = editElement.querySelector(".edit-item__status")

    editElement.dataset.id = ""
    editElementName.value = ""
    editElementEndDate.value = ""
    editElementPriority.value = ""
    editElementStatus.value = ""

    editElement.classList.add("hidden")
}

export { showEditElement, hideEditElement }
