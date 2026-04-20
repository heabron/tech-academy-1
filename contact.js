const form = document.getElementById('formContato')
const feedback = document.getElementById('feedback')

form.addEventListener('submit', function (e) {
	e.preventDefault()

	const name = document.getElementById('nome').value.trim()
	const email = document.getElementById('email').value.trim()
	const message = document.getElementById('mensagem').value.trim()
	let error = false
	const nameError = document.getElementById('nomeError')
	const emailError = document.getElementById('emailError')
	const messageError = document.getElementById('mensagemError')

	if (!name) {
		nameError.innerHTML = 'O nome é obrigatório.'
		error = true
	}

	if (!email) {
		emailError.innerHTML = 'O email é obrigatório.'
		error = true
	}

	if (!message) {
		messageError.innerHTML = 'A mensagem é obrigatória.'
		error = true
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(email)) {
		emailError.innerHTML = 'Digite um email válido.'

		error = true
	}
	if (error) {
		return
	}

	const response = {
		nome: name,
		email: email,
		mensagem: message,
	}

	feedback.innerHTML = JSON.stringify(response, null, 4)
	form.reset()
	messageError.innerHTML = ''
	emailError.innerHTML = ''
	nameError.innerHTML = ''
})
