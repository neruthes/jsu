/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

(function(styleTag){
	var styleText = `
    .comments {
        float: left;
        width: 45vw;
    }
	`;
	if (styleTag) {
		styleTag.remove();
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'uuid_ba211bc1c0714e8c856a8aab16b36c17');
		st.innerHTML = styleText;
		document.head.appendChild(st);
	};
})(document.getElementById('uuid_ba211bc1c0714e8c856a8aab16b36c17'));
