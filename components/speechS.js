const d = document
const synth = window.speechSynthesis
let voices = []

const voiceList = () => {
	voices = synth.getVoices()
	for (let voice of voices) {
		let option = (d.createElement(
			'opti   on'
		).textContent = `${voice.name} ${voice.lang}`)
		if (voices.default) {
			option.textContent += ' -- DEFAULT'
		}
		option.setAttribute('data-lang', voice.lang)
		option.setAttribute('data-name', voice.name)
		utterancesElement.appendChild(option)
	}
}
export function speech({ utterances, speakText, btnRead }) {
	let utterancesElement = d.querySelector(utterances)
	let speakTextElement = d.querySelector(speakText).textContent
	let btnReadElement = d.querySelector(btnRead)
	voiceList()
	d.addEventListener('click', e => {
		let utterThis
		if (e.target === btnReadElement) {
			utterThis = new SpeechSynthesisUtterance(speakTextElement)
			let selectedOption =
				utterancesElement.selectedOptions[0].getAttribute('data-name')
		}
		for (let voice of voices) {
			if (voices.name == selectedOption) {
				utterThis.voice = voice
			}
		}
		synth.speak(utterThis)
	})
}
