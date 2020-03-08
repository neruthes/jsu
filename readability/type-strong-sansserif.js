/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
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
		styleTag.remove();
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'neruthes-typeface-replacement-text');
		st.innerHTML = styleText;
		document.head.appendChild(st);
	};
	(function(u){var xhr=new XMLHttpRequest();xhr.open('GET','//neruthes.xyz/jsu/'+u);xhr.onload=function(){eval(xhr.responseText);console.log('Loaded '+u);};xhr.send();})('readability/reset-styles.js');
})(document.getElementById('neruthes-typeface-replacement-text'));
