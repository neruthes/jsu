/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

window.uuid_3aab5646a5184ad3a2c2e9f501653fcc_func = function (argv, callback) {
	var verb = 'initial';
	if (argv) {
		verb = argv.verb || verb;
	};
	var divTag = document.getElementById('uuid_3aab5646a5184ad3a2c2e9f501653fcc');

	if (divTag) {
		divTag.remove()
		callback && callback({
			err: 0,
			msg: '',
			enabled: false
		});
	} else {
		divTag = document.createElement('div');
		divTag.setAttribute('id', 'uuid_3aab5646a5184ad3a2c2e9f501653fcc');
		divTag.innerHTML = `<style>
			#uuid_3aab5646a5184ad3a2c2e9f501653fcc {
				background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.324) 8%, rgba(255, 255, 255, 0.54) 16%, rgba(255, 255, 255, 0.9) 32%, rgba(255, 255, 255, 1));
				position: absolute;
				z-index: 9999;
				top: 1100px;
				left: 0px;
				width: 100vw;
				height: 400px;
				padding: 0px;
				margin: 0px;
			}
			#uuid_3aab5646a5184ad3a2c2e9f501653fcc-inner {
				text-align: center;
				padding: 180px 0 0;
			}
			#uuid_3aab5646a5184ad3a2c2e9f501653fcc-line1 {
				font-family: -apple-system, 'SF Pro Text', monospace;
				font-size: 24px;
				font-weight: 500;
				letter-spacing: 1px;
				line-height: 1.8em;
			}
			#uuid_3aab5646a5184ad3a2c2e9f501653fcc-line2 {
				font-family: 'PT Serif', monospace;
				font-size: 32px;
				font-weight: 600;
				letter-spacing: 1px;
				line-height: 1.8em;
			}
		</style>
		<div id="uuid_3aab5646a5184ad3a2c2e9f501653fcc-inner">
			<div id="uuid_3aab5646a5184ad3a2c2e9f501653fcc-line1">
				READ MORE AT
			</div>
			<div id="uuid_3aab5646a5184ad3a2c2e9f501653fcc-line2">
				www.TheWestTimes.com
			</div>
		</div>`;
		document.body.appendChild(divTag);
		callback && callback({
			err: 0,
			msg: '',
			enabled: true
		});
	};
};
