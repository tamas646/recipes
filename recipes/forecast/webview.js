module.exports = (Ferdi) => {
	const getMessages = () => {
		let direct = 0;
		const badgeDiv = document.querySelector(
			"#app-nav-switch-handle > header > div > div > div.notification-menu > div.notification-number"
		);
		if (badgeDiv) {
			direct = Ferdi.safeParseInt(badgeDiv.textContent);
		}

		Ferdi.setBadge(direct);
	};
	Ferdi.loop(getMessages);
};
