/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0
*/

// Crawl
scrollTo(0, document.body.offsetHeight);
window.func_edffa9115f6f4689aaec62e47a2fa183 = function () {
	// location.pathname === '/p/578b8a07ad82eafd7e0002a5/page/2'
	if (window.uuid_3087d265ae0d490e89b57d17eeeed829 === true) {
		return 1;
	}
	window.uuid_3087d265ae0d490e89b57d17eeeed829 = true;
	var uuid = 'uuid_3087d265ae0d490e89b57d17eeeed829';
	var threadId = location.pathname.slice(1).split('/')[1];
	var currentPage = location.pathname.slice(1).split('/')[3];
	console.log(currentPage);
	var lskey = [uuid, threadId, currentPage].join('__');
	if (currentPage === undefined) {
		currentPage = 1;
	};
	var selector = 'div.font_big';
	var nodes = document.querySelectorAll(selector);
	var contents = [];
	nodes.forEach(function (node) {
		contents.push(node.innerHTML.replace(/<br>/g, '\n').trim());
	});
	var txtResult = contents.join('\n------\n').replace(/<.+?>/g, '\n\n').replace(/\n+/g, '\n\n');
	localStorage[lskey] = txtResult;
	// copy(`\n------\n\n## Page ${currentPage}\n\n------\n\n` + txtResult.trim()+'\n');
	setTimeout(function () {
		document.querySelector('.page-item.next a.page-link').click();
	}, 200);
};
window.func_edffa9115f6f4689aaec62e47a2fa183();






// Export
(function (beginPage, endPage) {
	var uuid = 'uuid_3087d265ae0d490e89b57d17eeeed829';
	var threadId = location.pathname.slice(1).split('/')[1];
	var arr = [];
	for (var i = beginPage; i <= endPage; i++) {
		arr.push(`\n\n## Page ${i}\n\n------\n\n` + localStorage[[uuid, threadId, i.toString()].join('__')] + `\n\n`);
		if (localStorage[[uuid, threadId, i.toString()].join('__')] == undefined) {
			alert(`Error: Page ${i} is empty!`);
			return 1;
		}
	};
	var txt = arr.join('\n------\n').replace(/<.+?>/g, '\n\n').replace(/\n+/g, '\n\n');
	console.log(txt);
	copy(txt);
})(1, 78);
