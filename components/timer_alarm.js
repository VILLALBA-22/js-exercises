export { digitalClock, alarm }

function digitalClock(
	class_start_clock,
	class_container_clock,
	class_end_clock
) {
	document.addEventListener('click', e => {
		let myInterval

		if (e.target.matches(class_start_clock)) {
			let $clock_show = document.createElement('p')
			document.querySelector(class_start_clock).disabled = true
			$clock_show.classList.add('clock-show')
			document
				.querySelector(class_container_clock)
				.insertAdjacentElement('afterbegin', $clock_show)
			myInterval = setInterval(() => {
				$clock_show.innerText = moment().format('LTS')
			}, 1000)
		}

		if (e.target.matches(class_end_clock)) {
			let $clock_show = document.querySelector('.clock-show')
			$clock_show.parentNode.removeChild($clock_show)
			document.querySelector(class_start_clock).disabled = false
			clearInterval(myInterval)
		}
	})
}

function alarm() {
	const audio = document.createElement('audio')
	audio.src = './assets/alarma_guerra.mp3'
	document.addEventListener('click', e => {
		if (e.target.matches('.btn-start-alarm')) {
			document.querySelector('.btn-start-alarm').disabled = true
			audio.play()
		}
		if (e.target.matches('.btn-stop-alarm')) {
			document.querySelector('.btn-start-alarm').disabled = false
			audio.pause()
		}
	})
}
