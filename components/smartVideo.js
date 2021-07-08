const d = document
export function smartVideo() {
	d.addEventListener('visibilitychange', e => {
		if (d.visibilityState !== 'visible') {
			video.pause()
		}
	})
	const video = d.querySelector('.video-smart')
	const optionsVideo = {
		threshold: 0.6,
	}
	const handlerVideo = entries => {
		console.log('Reproduciendo')
		entries.forEach(entrie => {
			video.pause()
			if (entrie.isIntersecting) {
				video.play()
			}
		})
	}
	const observerVideo = new IntersectionObserver(handlerVideo, optionsVideo)
	observerVideo.observe(video)
}
