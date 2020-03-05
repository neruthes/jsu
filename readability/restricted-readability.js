/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0
*/

(function(){
	if (window.uuid_f00d460970e44ab5a4ff01e640e063f8 == '1.0.0') {
		return 1;
	};
	window.uuid_f00d460970e44ab5a4ff01e640e063f8 = '1.0.0';
	var doms = document.body.querySelectorAll('*');
	var applyStyles = function (dom) {
		dom.style.fontSize = '20px';
		dom.style.lineHeight = '1.6000em';
		dom.style.color = '#000';
		dom.style.background = '#FFF';
		dom.style.border = 'none';
		dom.style.outline = 'none';
		dom.style.boxShadow = 'none';
		dom.style.textShadow = 'none';
		dom.style.textRendering = 'optimizeLegibility';
		dom.style.opacity = '1';

		if (dom.tagName == 'A') {
			dom.style.color = '#31A1F1';
		};
		if (dom.tagName == 'TEXTAREA' || dom.tagName == 'INPUT') {
			dom.style.border = '1px solid #DDD';
			dom.style.borderRadius = '3px';
		};
	};
	for (var i = 0; i < doms.length; i++) {
		applyStyles(doms[i]);
	};
	applyStyles(document.body);

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
})();
