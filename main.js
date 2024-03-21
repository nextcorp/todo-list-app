const main = document.querySelector(".main")
const content = main.querySelector(".content")

async function getData() {
    const projectsResp = await fetch("./data.json")
    const projectsData = await projectsResp.json()
    console.log(projectsData)
}
