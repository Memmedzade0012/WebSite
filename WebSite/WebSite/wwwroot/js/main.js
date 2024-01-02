const upButton = document.getElementById("up-button")

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        upButton.style.opacity = 1
    }
    else {
        upButton.style.opacity = 0
    }
}

upButton.addEventListener('click', () => {
    if (window.scrollY > 200) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        upButton.style.cursor = "auto"
    }
})

const navbaBtn = document.getElementById("navbar-btn")
const dropDown = document.getElementById("dropdown")
var dropDownOpen = true

navbaBtn.addEventListener('click', () => {
    if (dropDownOpen == true) {
        dropDown.style.height = "294px"
        dropDownOpen = false
    }
    else {
        dropDown.style.height = "0"
        dropDownOpen = true
    }
})


