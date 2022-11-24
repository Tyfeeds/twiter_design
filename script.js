const toggleButton = document.getElementsByClassName("toggle-button")[0]
const hamburgerMenu = document.getElementsByClassName("footer")[0]

toggleButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
})