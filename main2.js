const toolsElement = main.querySelector(".tools")
const sortStatusElement = toolsElement.querySelector(".tools__sort")
const sortPriorityElement = toolsElement.querySelector(".tools__sort-priority")

function sortItems() {
    const priority = sortPriorityElement.value
    const status = sortStatusElement.value
    let sorted = list
    sorted =
        priority === "all"
            ? sorted
            : list.filter((e) => e.priority === priority)
    sorted = status === "all" ? sorted : list.filter((e) => e.status === status)
    render(sorted)
    updateButtons()
}

sortStatusElement.addEventListener("input", sortItems)
sortPriorityElement.addEventListener("input", sortItems)
