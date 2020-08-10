const form = document.querySelector ("#info")
const email = document.querySelector ("#email")
const message = document.querySelector ("#message")
const emailHelp = document.querySelector ("#emailHelp")
const messageHelp = document.querySelector ("#messageHelp")




form.addEventListener ("submit", (event) => {
	event.preventDefault()
	if (email.value === "" || message.value === "") {
		if (email.value === "") {
			emailHelp.innerText = "Por favor ingresar un email valido"
		}
		if (message.value === "") {
			messageHelp.innerText = "Por favor ingresar mensaje"
		} else {
			form.submit ();
		}
	}
})