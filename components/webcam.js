const d = document
export function webcam() {
	navigator.mediaDevices
		.getUserMedia({ audio: false, video: true })
		.then(stream => {
			let video = d.getElementById('video')
			video.srcObject = stream
		})
		.catch(x => {
			const message = d.createElement('p')
			message.textContent = 'No me diste permiso para acceder a tu camara :('
			d.querySelector('.container-div').insertAdjacentElement(
				'beforeend',
				message
			)
		})
}
