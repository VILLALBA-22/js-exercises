const d = document

export const newYear = setInterval(() => {
	let endYear = moment().endOf('year')
	d.querySelector('.days-countdown').innerText = `${
		1 + endYear.diff(moment(), 'days')
	}`

	let endDay = moment().endOf('day')
	d.querySelector('.hours-countdown').innerText = `${endDay.diff(
		moment(),
		'hours'
	)}`

	let endHour = moment().endOf('hour')
	d.querySelector('.minutes-countdow').innerText = `${endHour.diff(
		moment(),
		'minutes'
	)}`

	let endMinute = moment().endOf('minute')
	d.querySelector('.seconds-countdow').innerText = `${
		1 + endMinute.diff(moment(), 'seconds')
	}`

	if (endYear.diff(moment(), 'days') === 365) {
		d.querySelector('.countdown').remove()
		const NewYear = `<p class="new-year">Feliz año nuevo perra<p>`
		d.getElementById('section3').insertAdjacentHTML('beforeend', NewYear)
		clearInterval(newYear)
	}
}, 1000)
