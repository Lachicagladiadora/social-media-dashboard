import './style.css'

const checkboxElement = document.getElementById("checkbox")

const darkMode = () => {
    window.matchMedia('(prefers-color-scheme: dark)')
    console.log('hallo! dark-mode is true')
    checkboxElement.setAttribute('checked',true)
}
darkMode()

const darkTogle = () => {
    document.body.classList.toggle('is-dark-mode')
}

checkboxElement.addEventListener('change', darkTogle)


