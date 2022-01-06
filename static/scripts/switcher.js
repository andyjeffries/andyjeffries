// On page load or when changing themes, best to add inline in `head` to avoid FOUC
function setPageTheme() {
  document.getElementsByClassName("js-switcher-dark")[0].classList.add("text-gray-300", "dark:text-gray-700")
  document.getElementsByClassName("js-switcher-light")[0].classList.add("text-gray-300", "dark:text-gray-700")
  document.getElementsByClassName("js-switcher-system")[0].classList.add("text-gray-300", "dark:text-gray-700")

  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
    var cl = document.getElementsByClassName("js-switcher-dark")[0].classList
    cl.remove("text-gray-300", "dark:text-gray-700")
    cl.add("text-blue-500")
  } else if (!('theme' in localStorage)) {
    document.documentElement.classList.add('system')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    var cl = document.getElementsByClassName("js-switcher-system")[0].classList
    cl.remove("text-gray-300", "dark:text-gray-700")
    cl.add("text-blue-500")
  } else {
    var cl = document.getElementsByClassName("js-switcher-light")[0].classList
    cl.remove("text-gray-300", "dark:text-gray-700")
    cl.add("text-blue-500")
    document.documentElement.classList.remove('dark')
  }
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  setPageTheme()

  // Whenever the user explicitly chooses dark mode
  document.getElementsByClassName("js-switcher-dark")[0].addEventListener("click", function () {
    localStorage.theme = 'dark'
    setPageTheme()
  }, false)

  // Whenever the user explicitly chooses light mode
  document.getElementsByClassName("js-switcher-light")[0].addEventListener("click", function () {
    localStorage.theme = 'light'
    setPageTheme()
  }, false)

  // Whenever the user explicitly chooses to respect the OS preference
  document.getElementsByClassName("js-switcher-system")[0].addEventListener("click", function () {
    localStorage.removeItem('theme')
    setPageTheme()
  }, false)
})
