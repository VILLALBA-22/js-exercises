'use strict'
import { digitalClock, alarm } from './components/timer_alarm.js'
import { moveBall } from './components/ball.js'
import { newYear } from './components/countdown.js' //Interval
import { hamburgerMenu } from './components/hamburger.js'
import { backStart } from './components/backStart.js'
import { changeTheme } from './components/change-theme.js'
import { isDark } from './components/isDark.js'
import { responsiveIframe } from './components/responsiveIframe.js'
import { popUp } from './components/popUp.js'
import { userAgent } from './components/userAgent.js'
import { webcam } from './components/webcam.js'
import { geolocation } from './components/geolocation.js'
import { searchWord } from './components/searchWord.js'
import { getWin } from './components/lottery.js'
import { slider } from './components/slider.js'
import { scrollSpy } from './components/scrollSpy.js'
import { smartVideo } from './components/smartVideo.js'
import { checkFormHtml } from './components/checkFormhtml5.js'
import { speech } from './components/speechS.js'

const d = document
const w = window

d.addEventListener('DOMContentLoaded', e => {
	isDark()
	hamburgerMenu('.hamburger', '.menu-slider', '.menu-slider-p')
	digitalClock('.btn-reloj-start', '.clock', '.btn-reloj-end')
	alarm()
	d.addEventListener('keydown', e => {
		if (scrollY > 490 && scrollY < 709) {
			if (e.key === 'a' && e.altKey) {
				alert('Mandan a decir que andres es un crack')
			}
			moveBall(e, '.event-to-move', '.container-event')
		}
	})

	d.addEventListener('click', e => {
		changeTheme(e)
		getWin(e)
	})
	d.addEventListener('scroll', e => {
		backStart('.back-start', 'section1-button')
	})

	popUp()
	// responsiveIframe()
	userAgent()
	webcam()
	geolocation()
	searchWord()
	slider()
	scrollSpy()
	smartVideo()
	checkFormHtml()
	speech({
		utterances: '#utterances',
		speakText: '#speak-text',
		btnRead: '#read',
	})
})

w.addEventListener('online', e => {
	d.querySelector('.connected').classList.add('connected-active')
	setTimeout(() => {
		d.querySelector('.connected').classList.remove('connected-active')
	}, 4000)
})

w.addEventListener('offline', e => {
	d.querySelector('.disconnect').classList.add('disconnect-active')
	setTimeout(() => {
		d.querySelector('.disconnect').classList.remove('disconnect-active')
	}, 4000)
})
