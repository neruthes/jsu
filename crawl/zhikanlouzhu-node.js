`
node zhikanlouzhu-node.js ["fetch", "parse", "export"] {threadId} {beginPage} {endPage}
`

const fs = require('fs');
const request = require('request');
const child_process = require('child_process');
const homedir = require('os').homedir();

// ----------------------------------
const newLineMark = `__d0cea48fb583f5__`;
// ----------------------------------

let verb = process.argv[2];
let threadId = encodeURI(process.argv[3]);
let normalizedThreadId = 't_' + process.argv[3].split('/')[1] + '_' + encodeURI(process.argv[3].split('/')[0]).replace(/%/g, '');
let beginPage = parseInt(process.argv[4]) || 1;
let endPage = parseInt(process.argv[5]) || 2;

if (process.argv.length < 6) {
	console.log('Insufficient arguments. Exit 1.');
	return 1;
};

child_process.exec(`
mkdir ${homedir}/.xyz.neruthes/
mkdir ${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-node.v1
mkdir ${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-node.v1/html
mkdir ${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-node.v1/page
`);

const Data_Html = {
	get: function (threadId, page) {
		return fs.readFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-node.v1/html/${normalizedThreadId}-${page}.html`).toString();
	},
	set: function (threadId, page, html) {
		fs.writeFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-node.v1/html/${normalizedThreadId}-${page}.html`, html);
	}
};

const Data_Page = {
	get: function (threadId, page) {
		return JSON.parse(fs.readFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-node.v1/page/${normalizedThreadId}-${page}.json`).toString());
	},
	set: function (threadId, page, dataObj) {
		fs.writeFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-node.v1/page/${normalizedThreadId}-${page}.json`, JSON.stringify(dataObj, null, '\t'));
	}
};

let urls = (new Array(endPage-beginPage+1)).fill(1).map((x, i) => beginPage+i).map(page => ({
	url: `http://zhikanlouzhu.com/post/tieba/${threadId}/${page}.html`,
	threadId: threadId,
	normalizedThreadId: normalizedThreadId,
	page: page
}));

if (verb === 'fetch') {
	urls.map(function (url, i) {
		setTimeout(function () {
			request(url.url, function (err, msg, html) {
				if (err) {
					console.error('Error:', err);
					return 1;
				};
				Data_Html.set(url.threadId, url.page, html);
				console.log(`Saved html: ${decodeURIComponent(url.url)}`);
			});
		}, 5000 * i);
	});
};

if (verb === 'parse') {
	urls.map(function (url, i) {
		setTimeout(function () {
			var html = Data_Html.get(url.threadId, url.page).replace(/>\s+/g, '>');
			var posts = html.match(/content box">(.+?)<div class="louInfo/g);
			Data_Page.set(url.threadId, url.page, {
				posts: posts.map(
					x => x.replace(
						/__d0cea48fb583f5__/g, '\n\n'
					).replace(
						/content box">/, ''
					).replace(
						/<div class="louInfo/, ''
					).replace(
						/<br\s?\/?>/g, '\n\n'
					).replace(
						/<.+?>/g, ''
					).trim()
				),
				threadId: url.threadId,
				page: url.page
			});
			console.log(`Parsed page [${url.page}]. Got ${posts.length} entries.`);
		}, 100 * i);
	});
};

if (verb === 'export') {
	var exportHtml = urls.map(function (url, i) {
		var pageData = Data_Page.get(url.threadId, url.page);
		var pageHtml = `## Page ${url.page}\n\n` + pageData.posts.map(function (post) {
			return `------\n\n${post}\n\n`
		}).join('');
		return pageHtml;
	}).join('\n\n------\n\n').replace(/\n+/g, '\n\n');
	console.log(exportHtml);
};

if (verb === 'rm') {
	child_process.exec(`rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-node.v1/html/${normalizedThreadId}-*.html; rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-node.v1/page/${normalizedThreadId}-*.json;`);
};

if (verb === 'nuke') {
	child_process.exec(`rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-node.v1/html/*.html; rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-node.v1/page/*.json;`);
};
