/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

(function(styleTag){
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
	if (styleTag) {
		styleTag.remove();
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'neruthes-xyz--jsu-readability--wikipedia');
		st.innerHTML = styleText;
		document.head.appendChild(st);
	};
})(document.getElementById('neruthes-xyz--jsu-readability--wikipedia'));
