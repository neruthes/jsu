/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0
*/

(function(styleTag){
	var styleText = `html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section, div, a, figure, header, footer, q, cite, em, strong, address, time, dfn, caption
	{
		font-family: -apple-system, "SF Pro Text", "SF Pro UI", "SF UI Text", "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Product Sans", "Droid Sans", "Arial", sans-serif, "PingFang SC", "Noto Sans CJK SC", "Source Han Sans CN", "Hiragino Sans GB", "Hiragino Sans", "Heiti SC", "Microsoft YaHei" !important;
	}
	html, body, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section {
		font-size: 20px !important;
		font-weight: 400 !important;
	}
	pre, pre *, code, code * {
		font-family: "JetBrains Mono", "Source Code Pro", "Inconsolata", "Menlo", Consolas, monospace !important;
	}`;
	if (styleTag) {
		styleTag.innerHTML = styleText;
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'neruthes-typeface-replacement-text');
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
})(document.getElementById('neruthes-typeface-replacement-text'));
