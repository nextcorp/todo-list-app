function sortItems(items, sortPriorityElement, sortStatusElement) {
    const priority = sortPriorityElement.value
    const status = sortStatusElement.value
    let sorted = items
    if (priority != "all") {
        sorted = sorted.filter((e) => e.priority === priority)
    }
    if (status != "all") {
        sorted = sorted.filter((e) => e.status === status)
    }
    return sorted
}

export { sortItems }
