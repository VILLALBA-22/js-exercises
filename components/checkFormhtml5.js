const d = document
const $nameSection13 = d.querySelector('#name-section13')
const $emailSection13 = d.querySelector('#email-section13')
const $loader = d.querySelector('.loader-contact-form')
const $successSendForm = d.querySelector('.response-contact-form')

export function checkFormHtml() {
	d.addEventListener('input', e => {
		if (e.target.matches('#name-section13')) {
			const regex = new RegExp($nameSection13.pattern, 'g')
			d.querySelector(
				'.flag-name'
			).innerHTML = `<p class="input-wrong">Escribe tu nombre.</p>`
			if (regex.test($nameSection13.value)) {
				d.querySelector('.flag-name').firstElementChild.remove()
			}
		}
		if (e.target.matches('#email-section13')) {
			const regex = new RegExp($emailSection13.pattern)
			d.querySelector(
				'.flag-email'
			).innerHTML = `<p class="input-wrong">Escribe tu email.</p>`
			if (regex.test($emailSection13.value)) {
				d.querySelector('.flag-email').firstElementChild.remove()
			}
		}
	})

	d.addEventListener('submit', e => {
		alert('Enviando formulario')
		$loader.classList.add('loader-contact-form-active')

		setTimeout(() => {
			d.querySelector('.form-section-13').reset()
			$loader.classList.remove('loader-contact-form-active')
			$successSendForm.classList.add('response-contact-form-active')
			setTimeout(() => {
				$successSendForm.classList.remove('response-contact-form-active')
			}, 5000)
		}, 3000)
	})
}
