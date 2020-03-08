/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

(function(styleTag){
	var styleText = `html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section, div, a, figure, header, footer, q, cite, em, strong, address, time, dfn, caption
	{
		color: #000 !important;
		background: #FFF !important;
		box-shadow: none !important;
	}`;
	if (styleTag) {
		styleTag.remove();
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'uuid_10a70394667c4d3a947f7c3954e83951');
		st.innerHTML = styleText;
		document.head.appendChild(st);
	};
})(document.getElementById('uuid_10a70394667c4d3a947f7c3954e83951'));
