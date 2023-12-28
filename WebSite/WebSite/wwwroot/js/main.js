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