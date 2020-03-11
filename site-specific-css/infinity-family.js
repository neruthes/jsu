/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

window.uuid_ba211bc1c0714e8c856a8aab16b36c17_func = function (argv, callback) {
    var verb = 'initial';
    if (argv) {
        verb = argv.verb || verb;
    };;
	var styleText = '';
    if (location.pathname.indexOf('/project/') === 0) {
        styleText = `
        .comments {
            float: left;
            width: 45vw;
        }
    	`;
    };
    var styleTag = document.getElementById('uuid_ba211bc1c0714e8c856a8aab16b36c17');

    if (verb === 'revert') {
		styleTag.remove();
		callback && callback({
			err: 0,
			msg: 'Removed infinity-family.js styles.',
			enabled: false
		});
	} else if (verb === 'make') {
		if (!styleTag) {
			styleTag = document.createElement('style');
			styleTag.setAttribute('id', 'uuid_ba211bc1c0714e8c856a8aab16b36c17');
            styleTag.innerHTML = styleText;
		} else {
            styleTag.innerHTML = styleText;
            document.head.appendChild(styleTag);
        };
		callback && callback({
			err: 0,
			msg: 'Added infinity-family.js styles as required.',
			enabled: true
		});
	} else { // Swap state
		if (styleTag) {
			styleTag.remove()
			styleTag = document.createElement('style');
			callback && callback({
				err: 0,
				msg: 'Swapped infinity-family.js styles. Removed.',
				enabled: false
			});
		} else {
			styleTag.innerHTML = styleText;
			document.head.appendChild(styleTag);
			callback && callback({
				err: 0,
				msg: 'Added infinity-family.js styles as required.',
				enabled: true
			});
		};
	};
};
