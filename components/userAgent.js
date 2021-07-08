const d = document
export function userAgent() {
	d.querySelector('.user-agent-text').textContent += ` ${navigator.userAgent}`
	d.querySelector(
		'.user-agent-platform'
	).textContent += ` ${navigator.platform}`
	const browsers = [
		['Edg/', 'Edge/', 'EdgA/', 'EdgiOS/', 'Microsoft Edge'],
		['OPR/', 'Presto/', 'Opera'],
		['MSIE', 'Trident/', 'Internet Explorer'],
		['Firefox/', 'FxiOS/', 'Firefox'],
		['Chrome/', 'CriOS/', 'Chrome'],
		['Safari/', 'Safari'],
	]
	const userAgent = navigator.userAgent
	const findBrowser = () => {
		for (let browser of browsers) {
			for (let key of browser) {
				if (userAgent.indexOf(key) !== -1) {
					return browser[browser.length - 1]
				}
			}
		}
	}
	let isMobile = 'Mobiles'
	if (navigator.userAgentData.mobile === false) {
		isMobile = 'de escritorio'
	}
	const currentBrowser = findBrowser()
	d.querySelector('.user-agent-navigator').textContent += ` ${currentBrowser}`
	d.querySelector(
		'.only-browser'
	).textContent = `Este contenido solo esta disponble para ${currentBrowser}`
	d.querySelector(
		'.only-device'
	).textContent = `Este contenido solo se ve en plataformas ${isMobile}`
}
