const d = document
let test = null

export function popUp() {
	function openPopUp(url, width, height) {
		let popUp = open(
			`${url}`,
			'Test',
			`width=${width}, height=${height},scrollbars=NO`
		)
		return popUp
	}

	d.addEventListener('click', e => {
		if (
			e.target.matches('.tester-submit-test') &&
			d.querySelector('#tester-responsive-url').value !== ''
		) {
			test = openPopUp(
				d.querySelector('#tester-responsive-url').value,
				d.querySelector('#tester-responsive-width').value,
				d.querySelector('#tester-responsive-height').value
			)
		}
		if (e.target.matches('.tester-close')) {
			test.close()
		}
	})
}
