/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

window.uuid_3aab5646a5184ad3a2c2e9f501653fcd_func = function (argv, callback) {
	var verb = 'initial';
	if (argv) {
		verb = argv.verb || verb;
	};
	var divTag = document.getElementById('uuid_3aab5646a5184ad3a2c2e9f501653fcd');

	if (divTag) {
		divTag.remove()
		callback && callback({
			err: 0,
			msg: '',
			enabled: false
		});
	} else {
		divTag = document.createElement('div');
		divTag.setAttribute('id', 'uuid_3aab5646a5184ad3a2c2e9f501653fcd');
		divTag.innerHTML = `<style>
			body {
				padding-top: 200px !important;
			}
			#uuid_3aab5646a5184ad3a2c2e9f501653fcd {
				background: #FFF;
				border-bottom: 1px solid rgba(128, 128, 128, 0.7);
				position: fixed;
				z-index: 9999;
				top: -200px;
				/* top: 0px; */
				left: 0px;
				width: 100vw;
				height: 200px;
				box-sizing: border-box;
				padding: 0px;
				margin: 0px;
			}
			#uuid_3aab5646a5184ad3a2c2e9f501653fcd-inner {
				text-align: center;
				padding: 50px 15px 0;
			}
			#uuid_3aab5646a5184ad3a2c2e9f501653fcd-line1 {
				font-family: 'Seravek', -apple-system, 'SF Pro Text', monospace;
				font-size: 20px;
				font-weight: 500;
				letter-spacing: 1px;
				line-height: 1.8em;
			}
			#uuid_3aab5646a5184ad3a2c2e9f501653fcd-line2 {
				font-family: 'JetBrains Mono', serif;
				font-size: 15px;
				font-weight: 400;
				line-height: 1.8em;
			}
		</style>
		<div id="uuid_3aab5646a5184ad3a2c2e9f501653fcd-inner">
			<div id="uuid_3aab5646a5184ad3a2c2e9f501653fcd-line1">
				WEBPAGE URL
			</div>
			<div id="uuid_3aab5646a5184ad3a2c2e9f501653fcd-line2">
				${ location.href }
			</div>
		</div>`;
		document.body.appendChild(divTag);
		document.querySelector('#uuid_3aab5646a5184ad3a2c2e9f501653fcd-line1').addEventListener('click', function () {
			document.querySelector('#uuid_3aab5646a5184ad3a2c2e9f501653fcd-line1').innerHTML = '网页链接'
		});
		callback && callback({
			err: 0,
			msg: '',
			enabled: true
		});
	};
};

uuid_3aab5646a5184ad3a2c2e9f501653fcd_func()
