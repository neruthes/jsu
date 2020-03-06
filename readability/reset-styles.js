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
		h1, h2, h3, h4, h5, h6, p {
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
