const d = document
export function responsiveIframe() {
	const $embedVideo = `<iframe src="https://www.youtube.com/embed/36tggrpRoTI" loading="lazi" allowfullscreen="true" height="400px" class="embed-video clean" frameborder="0"></iframe>`
	const $embedMaps = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2762.4744090972963!2d-74.09584429870814!3d4.74666879773412!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sco!4v1624396252962!5m2!1sen!2sco" class="clean" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
	const $linkMaps = `<a href="https://www.google.com/maps/@4.746669,-74.095844,800m/data=!3m1!1e3?hl=eni" class="clean" target="_blank">Ver Mapa</a>`
	const $linkVideo = `<a href="https://www.xvideos.com/embedframe/27019979" target="_blank" class="video-youtube-class clean">Ver Video</a>`
	const $containerVideo = d.querySelector('.video-youtube')
	const $containerMap = d.querySelector('.maps-embed')
	if (window.matchMedia('(min-width: 500px)').matches) {
		$containerVideo.insertAdjacentHTML('beforeend', $embedVideo)
		$containerMap.insertAdjacentHTML('beforeend', $embedMaps)
	} else {
		$containerVideo.insertAdjacentHTML('beforeend', $linkVideo)
		$containerMap.insertAdjacentHTML('beforeend', $linkMaps)
	}
	window.addEventListener('resize', _ => {
		if (
			window.matchMedia('(min-width: 500px)').matches &&
			$containerVideo.lastElementChild.classList[0] == 'video-youtube-class'
		) {
			d.querySelectorAll('.clean').forEach(e => e.remove())
			$containerVideo.insertAdjacentHTML('beforeend', $embedVideo)
			$containerMap.insertAdjacentHTML('beforeend', $embedMaps)
		} else if (
			window.matchMedia('(max-width: 500px)').matches &&
			$containerVideo.lastElementChild.classList[0] == 'embed-video'
		) {
			d.querySelectorAll('.clean').forEach(e => e.remove())
			$containerVideo.insertAdjacentHTML('beforeend', $linkVideo)
			$containerMap.insertAdjacentHTML('beforeend', $linkMaps)
		}
	})
}
