let cube = document.getElementById("cube")

let cubeBtn = document.getElementsByClassName("cube-button")

let arrayFromCubeBtn = [...cubeBtn]

arrayFromCubeBtn.forEach( btn => {
    btn.addEventListener("click", storeBtnId)
} )

function storeBtnId(e) {
    let id = e.target.id.split("-").reverse()[0]
    cube.className = `cube rotate-${id}`
}


