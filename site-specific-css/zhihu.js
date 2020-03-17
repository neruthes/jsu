/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

window.uuid_f501a8c0bfb1467f9e09da464bd56b0b_func = function (argv, callback) {
	var verb = 'initial';
	if (argv) {
		verb = argv.verb || verb;
	};
	var styleText = '';
	if (location.pathname === ('/follow')) {
		styleText = `
		.GlobalSideBar {
			display: none;
		}
		.Topstory-mainColumn {
			margin: auto !important;
		}
		`;
	};
	var styleTag = document.getElementById('uuid_f501a8c0bfb1467f9e09da464bd56b0b');

	if (verb === 'revert') {
		styleTag.remove();
		callback && callback({
			err: 0,
			msg: 'Removed zhihu.js styles.',
			enabled: false
		});
	} else if (verb === 'make') {
		if (!styleTag) {
			styleTag = document.createElement('style');
			styleTag.setAttribute('id', 'uuid_f501a8c0bfb1467f9e09da464bd56b0b');
			styleTag.innerHTML = styleText;
		} else {
			styleTag.innerHTML = styleText;
			document.head.appendChild(styleTag);
		};
		callback && callback({
			err: 0,
			msg: 'Added zhihu.js styles as required.',
			enabled: true
		});
	} else { // Swap state
		if (styleTag) {
			styleTag.remove();
			callback && callback({
				err: 0,
				msg: 'Swapped zhihu.js styles. Removed.',
				enabled: false
			});
		} else {
			styleTag = document.createElement('style');
			styleTag.setAttribute('id', 'uuid_f501a8c0bfb1467f9e09da464bd56b0b');
			styleTag.innerHTML = styleText;
			document.head.appendChild(styleTag);
			callback && callback({
				err: 0,
				msg: 'Swapped zhihu.js styles. Added.',
				enabled: true
			});
		};
	};
};


uuid_f501a8c0bfb1467f9e09da464bd56b0b_func();
