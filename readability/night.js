/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0
*/

(function(styleTag){
	var styleText = `html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section, div, a, figure, header, footer, q, cite, em, strong, address, time, dfn, caption
	{
		color: #999 !important;
		background: #000 !important;
	}`;
	if (styleTag) {
		styleTag.innerHTML = styleText;
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'neruthes-c7b490da96e443a99cde54b4e68e34d9');
		st.innerHTML = styleText;
		document.head.appendChild(st);
	};
	var styleDict = {
		fontSize: {
			h1: 40,
			h2: 36,
			h3: 30,
			h4: 28,
			h5: 26,
			h6: 22,
			p: 20,
		},
		fontWeight: {
			h1: 600,
			h2: 600,
			h3: 600,
			h4: 600,
			h5: 600,
			h6: 600,
			p: 400,
		}
	};
	document.querySelectorAll('h1, h2, h3, h4, h5, h6, p').forEach(node => {
		node.style.fontSize = (styleDict.fontSize)[node.tagName.toLowerCase()] + 'px';
		node.style.fontSize = (styleDict.fontWeight)[node.tagName.toLowerCase()] + '';
	});
})(document.getElementById('neruthes-c7b490da96e443a99cde54b4e68e34d9'));
