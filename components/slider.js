const d = document
let currentSlide = 0
const slides = d.querySelectorAll('.slider-content')
export function slider() {
	d.addEventListener('click', e => {
		if (
			e.target.matches('.slider-forward') ||
			e.target.matches('.fa-chevron-right')
		) {
			slides[currentSlide].classList.add('slider-content-hidden')
			currentSlide++
			if (currentSlide === slides.length) currentSlide = 0
			slides[currentSlide].classList.remove('slider-content-hidden')
		} else if (
			e.target.matches('.slider-back') ||
			e.target.matches('.fa-chevron-left')
		) {
			slides[currentSlide].classList.add('slider-content-hidden')
			currentSlide--
			if (currentSlide < 0) currentSlide = slides.length - 1
			slides[currentSlide].classList.remove('slider-content-hidden')
		}
	})
}
