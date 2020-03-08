/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0
*/

(function(styleTag){
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
			line-height: 1.6em;
			max-width: 692px;
			margin-left: auto;
			margin-right: auto;
		}
	`;
	if (styleTag) {
		styleTag.remove();
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'uuid_c9eeedc587bd48b0a07875edc4f8ae9a');
		st.innerHTML = styleText;
		document.head.appendChild(st);
	};
})(document.getElementById('uuid_c9eeedc587bd48b0a07875edc4f8ae9a'));

(function(styleTag){ // Reset colors as day time
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
