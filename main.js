import './style.css'

const bodyElement = document.getElementById("body")
const checkboxElement = document.getElementById("checkbox")

const darkMode = () => {
    window.matchMedia('(prefers-color-scheme: dark)')
    console.log('hallo! dark-mode is true')
    checkboxElement.setAttribute('checked',true)
}
darkMode()

const darkTogle = () => {
    bodyElement.classList.toggle('is-dark-mode')
}

checkboxElement.addEventListener('change', darkTogle)
