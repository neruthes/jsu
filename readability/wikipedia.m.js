/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

window.uuid_83e4165b9d4f4d4eb558439cd421451d_func = function (argv, callback) {
	var verb = 'initial';
	if (argv) {
		verb = argv.verb || verb;
	};
	var styleText = `
	@import url(https://neruthes.xyz/fonts/jetbrains-mono.css);
	html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section, div, a, figure, header, footer, q, cite, em, strong, address, time, dfn, caption
	{
	}
	html, body, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section {
		font-size: 22px !important;
		font-weight: 400 !important;
	}
	#content {
		border: none;
	}
	body,
	#mw-page-base {
		background: #FFF;
	}
	pre, pre *, code, code * {
		font-family: "JetBrains Mono", "Source Code Pro", "Inconsolata", "Menlo", Consolas, monospace !important;
	}`;
	var styleTag = document.getElementById('uuid_83e4165b9d4f4d4eb558439cd421451d');

	if (verb === 'revert') {
		styleTag.remove();
		callback && callback({
			err: 0,
			msg: 'Removed wikipedia.m.js styles.',
			enabled: false
		});
	} else if (verb === 'make') {
		if (!styleTag) {
			styleTag = document.createElement('style');
			styleTag.setAttribute('id', 'uuid_83e4165b9d4f4d4eb558439cd421451d');
			styleTag.innerHTML = styleText;
		} else {
			styleTag.innerHTML = styleText;
			document.head.appendChild(styleTag);
		};
		callback && callback({
			err: 0,
			msg: 'Added wikipedia.m.js styles as required.',
			enabled: true
		});
	} else { // Swap state
		if (styleTag) {
			styleTag.remove()
			styleTag = document.createElement('style');
			callback && callback({
				err: 0,
				msg: 'Swapped wikipedia.m.js styles. Removed.',
				enabled: false
			});
		} else {
			styleTag = document.createElement('style');
			styleTag.innerHTML = styleText;
			document.head.appendChild(styleTag);
			callback && callback({
				err: 0,
				msg: 'Swapped wikipedia.m.js styles. Added.',
				enabled: true
			});
		};
	};
};
