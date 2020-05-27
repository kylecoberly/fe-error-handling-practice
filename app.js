const $form = document.querySelector("form")
const $error = $form.querySelector(".error")

$form.addEventListener("submit", event => {
  event.preventDefault()
  fetch("http://localhost:4000/apples/1", {
    method: "GET",
  }).then(response => {
    return response.text()
  }).then(responseStuffHere => {
    console.log("Ahoy!")
  }).catch(error => {
    $error.textContent = "There was a problem with the network; please check your internet connection."
  })
})
