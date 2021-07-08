const d = document
let ballX = 0
let ballY = 0
export function moveBall(e, ball, stage) {
	const $stage = d.querySelector(stage)
	const $ball = d.querySelector(ball)
	const $limitStage = $stage.getBoundingClientRect()
	const $limitBall = $ball.getBoundingClientRect()

	const move = () => {
		if (e.keyCode === 37) {
			if ($limitStage.left < $limitBall.left) {
				e.preventDefault()
				ballX -= 5
			}
		} else if (e.keyCode === 38) {
			if ($limitStage.top < $limitBall.top) {
				e.preventDefault()
				ballY -= 5
			}
		} else if (e.keyCode === 39) {
			if ($limitBall.right < $limitStage.right) {
				e.preventDefault()
				ballX += 5
			}
		} else if (e.keyCode === 40) {
			if ($limitBall.bottom < $limitStage.bottom) {
				e.preventDefault()
				ballY += 5
			}
		}
		$ball.style.transform = `translate(${ballX}px,${ballY}px)`
	}
	move()
}
