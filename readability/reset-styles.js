/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

window.uuid_c9eeedc587bd48b0a07875edc4f8ae9a_func = function (argv, callback) {
	var verb = 'initial';
	if (argv) {
		verb = argv.verb || verb;
	};
	var styleText = `
		h1 { font-size: 40px; font-weight: 600; }
		h2 { font-size: 36px; font-weight: 600; }
		h3 { font-size: 30px; font-weight: 600; }
		h4 { font-size: 28px; font-weight: 600; }
		h5 { font-size: 26px; font-weight: 600; }
		h6 { font-size: 22px; font-weight: 600; }
		p { font-size: 20px; font-weight: 400; }
		h1, h2, h3, h4, h5, h6,
		h1 ~ ul, h2 ~ ul, h3 ~ ul, h4 ~ ul, h5 ~ ul, h6 ~ ul,
		h1 ~ ol, h2 ~ ol, h3 ~ ol, h4 ~ ol, h5 ~ ol, h6 ~ ol,
		h1 ~ table, h2 ~ table, h3 ~ table, h4 ~ table, h5 ~ table, h6 ~ table,
		p {
			line-height: 1.6;
			max-width: 736px;
			margin-left: auto !important;
			margin-right: auto !important;
		}
	`;
	var styleTag = document.getElementById('uuid_c9eeedc587bd48b0a07875edc4f8ae9a');

	if (verb === 'revert') {
		styleTag.remove();
		callback && callback({
			err: 0,
			msg: 'Removed reset-styles.js styles.',
			enabled: false
		});
	} else if (verb === 'make') {
		if (!styleTag) {
			styleTag = document.createElement('style');
			styleTag.setAttribute('id', 'uuid_c9eeedc587bd48b0a07875edc4f8ae9a');
			styleTag.innerHTML = styleText;
		} else {
			styleTag.innerHTML = styleText;
			document.head.appendChild(styleTag);
		};
		callback && callback({
			err: 0,
			msg: 'Added reset-styles.js styles as required.',
			enabled: true
		});
	} else { // Swap state
		if (styleTag) {
			styleTag.remove()
			styleTag = document.createElement('style');
			callback && callback({
				err: 0,
				msg: 'Swapped reset-styles.js styles. Removed.',
				enabled: false
			});
		} else {
			styleTag.innerHTML = styleText;
			document.head.appendChild(styleTag);
			callback && callback({
				err: 0,
				msg: 'Swapped reset-styles.js styles. Added.',
				enabled: true
			});
		};
	};
};
