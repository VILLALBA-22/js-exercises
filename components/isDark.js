const d = document
export function isDark(){
  if("true"===localStorage.getItem("isDark")){
		d.querySelector('.body').classList.toggle('body-dark')
		d.querySelector('.menu-slider').classList.toggle('move-slider-dark')
		d.querySelector('.header').classList.toggle('header-dark')
		d.querySelector('.icon-theme ').classList.toggle('fa-sun')
	}
}