const d = document

export function searchWord() {
	const $inputSearch = d.querySelector('#search-card')
	const $card = d.querySelectorAll('.card')
	d.addEventListener('input', e => {
		const regex = new RegExp($inputSearch.value, 'gi')
		if (e.target === $inputSearch) {
			$card.forEach(e => {
				e.style.display = 'inline-block'
				if (e.lastElementChild.textContent.search(regex)) {
					e.style.display = 'none'
				}
			})
		}
	})
}
