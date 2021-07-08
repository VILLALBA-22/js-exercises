const d = document
export function getWin(e) {
	const lotteryItems = d.querySelectorAll('.lottery-item')
	const lotteryContent = []
	for (const item of lotteryItems) {
		lotteryContent.push(item.textContent)
	}
	const getWin = () => Math.round(Math.random() * (lotteryContent.length - 1))
	if (e.target.matches('.get-win')) {
		alert(`El ganador ha sido ${lotteryContent[getWin()]}`)
	}
}
