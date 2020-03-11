/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

(function(styleTag){
	var txt = function (st) {
		if (st === 2) {
			return ''
		};
		return `html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section, div, a, figure, header, footer, q, cite, em, strong, address, time, dfn, caption
		{
			${[
				'font-family: -apple-system, "SF Pro Text", "SF Pro UI", "SF UI Text", "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Product Sans", "Droid Sans", "Arial", sans-serif, "PingFang SC", "Noto Sans CJK SC", "Source Han Sans CN", "Hiragino Sans GB", "Hiragino Sans", "Heiti SC", "Microsoft YaHei" !important;',
				'font-family: "Source Serif Pro", "Charter", "Iowan Old Style", "Georgia", "Merriweather", "Times New Roman", "Times", serif, "Noto Serif SC", "Source Han Serif CN", "Stongti SC" !important;'
			][st]}
		}
		html, body {
			font-size: 10px !important;
		}
		body > *,
		body > * > *,
		body > * > * > * {
			font-size: 20px;
		}
		p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section {
			font-size: 20px !important;
			font-weight: 400 !important;
		}
		h1 { font-size: 36px !important; font-weight: 600 !important; }
		h2 { font-size: 26px !important; font-weight: 700 !important; }
		h3 { font-size: 24px !important; font-weight: 600 !important; }
		h4 { font-size: 22px !important; font-weight: 400 !important; }
		h5 { font-size: 20px !important; font-weight: 600 !important; }
		pre, pre *, code, code * {
			font-family: "JetBrains Mono", "Source Code Pro", "Inconsolata", "Menlo", Consolas, monospace !important;
		}`;
	}
	if (styleTag) {
		var newState = (parseInt(styleTag.getAttribute('data-state')) + 1) % 3;
		styleTag.innerHTML = txt(newState);
		styleTag.setAttribute('data-state', newState);
	} else {
		var tag = document.createElement('style');
		tag.setAttribute('id', 'neruthes-typeface-replacement-text');
		tag.innerHTML = txt(0);
		tag.setAttribute('data-state', 0);
		document.head.appendChild(tag);
	};
})(document.getElementById('neruthes-typeface-replacement-text'));
