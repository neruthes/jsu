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
	var styleText = `
    .comments {
        float: left;
        width: 45vw;
    }
	`;
    var styleTag = document.getElementById('uuid_ba211bc1c0714e8c856a8aab16b36c17');
	if (verb === 'unset') {
		styleTag.remove();
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'uuid_ba211bc1c0714e8c856a8aab16b36c17');
		st.innerHTML = styleText;
		document.head.appendChild(st);
        window.uuid_9a5a3ad359c2416ead609c80962d03e6_func({font: 1}, function (res) {
            console.log(res);
        });
	};
};
