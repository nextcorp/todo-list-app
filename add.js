function hideAddElement(addElement) {
    addElement.classList.add("hidden")
}

function showAddElement(addElement) {
    addElement.classList.remove("hidden")
}

export { hideAddElement, showAddElement }
