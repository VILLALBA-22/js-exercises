const d = document
const w = window

export function scrollSpy() {
	const getMenu = () => {
		if (w.innerWidth < 1020) {
			d.querySelector('.hamburger').style.display = 'inline-block'
			d.querySelector('.scrollSpy').style.display = 'none'
			d.querySelector('.main').style.marginRight = '0%'
		} else {
			d.querySelector('.hamburger').style.display = 'none'
			d.querySelector('.scrollSpy').style.display = 'block'
			d.querySelector('.main').style.marginRight = '20%'
		}
	}
	getMenu()
	w.addEventListener('resize', e => {
		getMenu()
	})
	const $links = d.querySelectorAll('.scrollSpy-a')
	const whatDo = (entries, observer) => {
		$links.forEach(link => link.classList.remove('scrollSpy-a-active'))
		entries.forEach(entrie => {
			if (entrie.isIntersecting) {
				d.querySelector(`#${entrie.target.id}-scrollSpy`).classList.add(
					'scrollSpy-a-active'
				)
			}
		})
	}
	const options = {
		// root, que elemento se tomara de referencia para observar
		// rootMargin, espacio para que se active antes de que llegue el elemento
		threshold: [0.6], //apartir de cuando se llamara el callback
	}
	const observer = new IntersectionObserver(whatDo, options) //Callback and options
	const sections = d.querySelectorAll('.section')
	sections.forEach(section => {
		observer.observe(section)
	})
}
