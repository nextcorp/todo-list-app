async function getRows() {
    const data = localStorage.getItem("todos")
    return data ? JSON.parse(data) : []
}

async function updRows(rows) {
    localStorage.setItem("todos", JSON.stringify(rows))
}

export { getRows, updRows }
