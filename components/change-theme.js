const d = document

export function changeTheme(e) {
	if (
		e.target.matches('.change-theme') ||
		e.target.matches('.change-theme i')
	) {
		d.querySelector('.body').classList.toggle('body-dark')
		d.querySelector('.menu-slider').classList.toggle('move-slider-dark')
		d.querySelector('.header').classList.toggle('header-dark')
		d.querySelector('.icon-theme ').classList.toggle('fa-sun')  
	}
	if(d.querySelector('.body').classList.contains('body-dark')){
		localStorage.setItem("isDark", "true")
	} else{
		localStorage.setItem("isDark", "false")
	}
}
