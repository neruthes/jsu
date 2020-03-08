/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0
*/

(function(){
	if (document.querySelector('#uuid_cd101a8082fe4bb1b94efb131c7724dd')) {
		return 1;
	};

	window.uuid_cd101a8082fe4bb1b94efb131c7724dd_close = function () {
		window.uuid_cd101a8082fe4bb1b94efb131c7724dd = false;
		document.querySelector('#uuid_cd101a8082fe4bb1b94efb131c7724dd').remove();
	};
	window.uuid_cd101a8082fe4bb1b94efb131c7724dd_choose = function (e) {
		var src = e.target.getAttribute('data-src');
		(function (u) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://' + u);
			xhr.onload = function(){
				eval(xhr.responseText);
				console.log('Loaded ' + u);
			};
			xhr.send();
		})(src);
		window.uuid_cd101a8082fe4bb1b94efb131c7724dd_close();
	};

	var listOfScripts = [
		'neruthes.xyz/jsu/readability/type-strong-sansserif.js',
		'neruthes.xyz/jsu/readability/type-strong-serif.js'
	];
	var listHtml = listOfScripts.map(function (str) {
		return `<div class="uuid_cd101a8082fe4bb1b94efb131c7724dd-option">
			<div class="uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner" data-src="${str}">
				${str}
			</div>
		</div>`;
	}).join('');

	var modalTag = document.createElement('div');
	modalTag.setAttribute('id', 'uuid_cd101a8082fe4bb1b94efb131c7724dd');
	modalTag.setAttribute('style', `
		background: rgba(128, 128, 128, 0.4);
		position: fixed;
		z-index: 9999;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		padding: 20px;
	`);
	modalTag.innerHTML = `
	<style>
	#uuid_cd101a8082fe4bb1b94efb131c7724dd * {
		font-family: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif;
		color: #000;
		line-height: 1.5;
	}
	#uuid_cd101a8082fe4bb1b94efb131c7724dd-inner {
		font-family: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif;
		background: #FFF;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.08) 0 5px 20px 2px;
		max-width: 600px;
		height: 100%;
		padding: 20px;
		margin: 0 auto;
		overflow: scroll;
	}
	#uuid_cd101a8082fe4bb1b94efb131c7724dd-header {
		padding: 10px 0 25px;
	}
	#uuid_cd101a8082fe4bb1b94efb131c7724dd-h1 {
		font-size: 22px;
		padding: 0;
		margin: 0;
	}
	#uuid_cd101a8082fe4bb1b94efb131c7724dd-list {
		overflow: auto;
	}
	.uuid_cd101a8082fe4bb1b94efb131c7724dd-option {
		padding: 0 0 15px;
	}
	.uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner {
		font-size: 20px;
		background: #FFF;
		border: 1px solid #DDD;
		border-radius: 4px;
		padding: 10px;
		cursor: pointer;
	}
	.uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner:hover {
		background: #F5F5F5;
		border: 1px solid #AAA;
	}
	</style>
	<div id="uuid_cd101a8082fe4bb1b94efb131c7724dd-inner">
		<div id="uuid_cd101a8082fe4bb1b94efb131c7724dd-header">
			<span style="float: right; cursor: pointer;" onclick="window.uuid_cd101a8082fe4bb1b94efb131c7724dd_close()">Close</span>
			<h1 id="uuid_cd101a8082fe4bb1b94efb131c7724dd-h1">Choose Script</h1>
		</div>
		<div id="uuid_cd101a8082fe4bb1b94efb131c7724dd-list">
			${listHtml}
		</div>
	</div>`;
	document.body.appendChild(modalTag);
	document.querySelectorAll('.uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner').forEach(function (node) {
		node.addEventListener('click', window.uuid_cd101a8082fe4bb1b94efb131c7724dd_choose);
	});
})();
