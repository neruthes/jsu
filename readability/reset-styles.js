/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0
*/

(function(styleTag){
	if (window.uuid_c9eeedc587bd48b0a07875edc4f8ae9a) {
		return 1;
	};
	window.uuid_c9eeedc587bd48b0a07875edc4f8ae9a = true;
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
		node.style.fontWeight = (styleDict.fontWeight)[node.tagName.toLowerCase()] + '';
	});
})();
