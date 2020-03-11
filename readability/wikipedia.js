/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/


window.uuid_6b747739dc4e4d5ab18bfe7906fafb45_func = function (argv, callback) {
	var verb = 'initial';
    if (argv) {
        verb = argv.verb || verb;
    };
	var styleText = `html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section, div, a, figure, header, footer, q, cite, em, strong, address, time, dfn, caption
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
	#bodyContent.mw-body-content {
		max-width: 720px;
		margin: 0 auto;
		position: relative;
		left: -110px;
	}
	pre, pre *, code, code * {
		font-family: "JetBrains Mono", "Source Code Pro", "Inconsolata", "Menlo", Consolas, monospace !important;
	}`;
	var styleTag = document.getElementById('uuid_6b747739dc4e4d5ab18bfe7906fafb45');
	if (verb === 'unset') {
		styleTag.remove();
		callback({
			err: 0,
			msg: 'Removed wikipedia.js styles.',
			enabled: false
		});
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'uuid_6b747739dc4e4d5ab18bfe7906fafb45');
		st.innerHTML = styleText;
		document.head.appendChild(st);
		callback({
			err: 0,
			msg: 'Added wikipedia.js styles.',
			enabled: true
		});
	};
};
