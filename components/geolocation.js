const d = document
export function geolocation() {
	//get corrent position
	if (true !== 'geolocation' in navigator) {
		const messageErro = `<p class="section8-p">Tu navegador no tiene geolocalizacion</p>`
		d.querySelector('.position').remove()
		d.getElementById('section8').insertAdjacentHTML('beforeend', messageErro)
	}

	const options = {
		enableHighAccuracy: true,
		timeout: 15000,
		maximumAge: 0, //cache
	}

	const success = pos => {
		const $link = d.querySelector('.a-position-maps')
		let crd = pos.coords
		d.querySelector('.latitud').textContent = `${crd.latitude}`
		d.querySelector('.longitude').textContent = `${crd.longitude}`
		d.querySelector('.accuracy').textContent = `${crd.accuracy}`
		$link.setAttribute(
			'href',
			`https://www.google.com/maps/@${crd.latitude},${crd.longitude},15.77z`
		)
	}

	const error = err => {
		const messageErro = `<p class="section8-p">ERROR(${err.code}): ${err.message}</p>`
		d.querySelector('.position').remove()
		d.getElementById('section8').insertAdjacentHTML('beforeend', messageErro)
	}

	navigator.geolocation.watchPosition(success, error, options)
}
