const checkboxElement = document.getElementById("checkbox");

const darkMode = () => {
  window.matchMedia("(prefers-color-scheme: dark)");
  checkboxElement.setAttribute("checked", false);
};
darkMode();

const darkTogle = () => {
  document.body.classList.toggle("is-dark-mode");
};

checkboxElement.addEventListener("change", darkTogle);
