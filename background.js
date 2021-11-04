var browser;

function openTab() {
	var newTab = browser.tabs.create({
		url: 'https://www.reddit.com/',
		active: true
	})
}

if (typeof browser === "undefined") {
	browser = chrome;
}

browser.browserAction.onClicked.addListener(openTab)