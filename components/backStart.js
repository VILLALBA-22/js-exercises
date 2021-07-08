const d = document

export function backStart(classStart, classStartA) {
	const $backStart = d.querySelector(classStart)
	const $backStartA = d.getElementById(classStartA)

	if (scrollY >= 500 && !$backStart.classList.contains('back-start-active')) {
		$backStart.classList.add('back-start-active')
		$backStartA.setAttribute('href', '#section1')
	} else if (
		scrollY < 500 &&
		$backStart.classList.contains('back-start-active')
	) {
		$backStart.classList.remove('back-start-active')
		$backStartA.removeAttribute('href')
	}
}
