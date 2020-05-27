const $form = document.querySelector("form")

$form.addEventListener("submit", event => {
  event.preventDefault()
  fetch("https://kylercoberly.com")
    .catch(error => {
      console.error(error.message)
    })
})
