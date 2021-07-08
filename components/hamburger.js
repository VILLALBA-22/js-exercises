const d = document
export function hamburgerMenu(hamburger, menuSlider, menuSliderP) {
	const $hamburger = d.querySelector(hamburger)
	const $menu = d.querySelector(menuSlider)
	const $menuTest = d.querySelector(menuSliderP)
	$hamburger.addEventListener('click', e => {
		$hamburger.classList.toggle('is-active')
		$menu.classList.toggle('menu-slider-active')
		$menuTest.classList.toggle('menu-slider-p-active')
	})
	d.addEventListener('click', e => {
		if (e.target.matches('.close')) {
			$hamburger.classList.toggle('is-active')
			$menu.classList.toggle('menu-slider-active')
			$menuTest.classList.toggle('menu-slider-p-active')
		}
	})
}
