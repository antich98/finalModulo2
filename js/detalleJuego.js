let cube = document.getElementById("cube")

let cubeBtn = document.getElementsByClassName("cube-button")
console.log(cubeBtn)

let arrayFromCubeBtn = [...cubeBtn]
console.log(arrayFromCubeBtn)

arrayFromCubeBtn.forEach( btn => {
    btn.addEventListener("click", storeBtnId)
} )

function storeBtnId(e) {
    let id = e.target.id.split("-").reverse()[0]
    console.log(id)
    cube.className = `cube rotate-${id}`
}


