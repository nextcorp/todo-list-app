const toolsElement = main.querySelector(".tools")
const sortStatusElement = toolsElement.querySelector(".tools__sort")
const sortPriorityElement = toolsElement.querySelector(".tools__sort-priority")

function sortItems() {
    const priority = sortPriorityElement.value
    const status = sortStatusElement.value
    let sorted = list
    if (priority != "all") {
        sorted = sorted.filter((e) => e.priority === priority)
    }
    if (status != "all") {
        sorted = sorted.filter((e) => e.status === status)
    }
    render(sorted)
    updateButtons()
}

sortStatusElement.addEventListener("input", sortItems)
sortPriorityElement.addEventListener("input", sortItems)
