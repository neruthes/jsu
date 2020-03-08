`
node tuoshuiba-node.js {threadId} {beginPage} {endPage} ["fetch", "parse", "export"]
`

const fs = require('fs');
const request = require('request');
const child_process = require('child_process');
const homedir = require('os').homedir();

// ----------------------------------
const newLineMark = `__d0cea1092d8344a3913ca8f48fb583f5__`;
// ----------------------------------

let threadId = process.argv[2];
let beginPage = parseInt(process.argv[3]) || 1;
let endPage = parseInt(process.argv[4]) || 2;

if (process.argv.length < 6) {
	console.log('Insufficient arguments. Exit 1.');
	return 1;
};

child_process.exec(`
mkdir ${homedir}/.xyz.neruthes/jsu.tuoshuiba-node.v1
mkdir ${homedir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/html
mkdir ${homedir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/page
`);

const Data_Html = {
	get: function (threadId, page) {
		return fs.readFileSync(`${homedir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/html/${threadId}-${page}.html`).toString();
	},
	set: function (threadId, page, html) {
		fs.writeFileSync(`${homedir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/html/${threadId}-${page}.html`, html);
	}
};

const Data_Page = {
	get: function (threadId, page) {
		return JSON.parse(fs.readFileSync(`${homedir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/page/${threadId}-${page}.json`).toString());
	},
	set: function (threadId, page, dataObj) {
		fs.writeFileSync(`${homedir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/page/${threadId}-${page}.json`, JSON.stringify(dataObj, null, '\t'));
	}
};

let urls = (new Array(endPage-beginPage+1)).fill(1).map((x, i) => beginPage+i).map(page => ({
	url: `http://www.tuoshuiba.com/p/${threadId}/page/${page}`,
	threadId: threadId,
	page: page
}));

if (process.argv[5] === 'fetch') {
	urls.map(function (url, i) {
		setTimeout(function () {
			request(url.url, function (err, msg, html) {
				if (err) {
					console.error('Error:', err);
					return 1;
				};
				Data_Html.set(url.threadId, url.page, html);
				console.log(`Saved html: ${url.url}`);
			});
		}, 5000 * i);
	});
};

if (process.argv[5] === 'parse') {
	urls.map(function (url, i) {
		setTimeout(function () {
			var html = Data_Html.get(url.threadId, url.page).replace(/\n+?/g, newLineMark);
			var posts = html.match(/font_big">(.+?)<\/div/g);
			Data_Page.set(url.threadId, url.page, {
				posts: posts.map(
					x => x.replace(
						/__d0cea1092d8344a3913ca8f48fb583f5__/g, '\n\n'
					).replace(
						/^font_big\">/, ''
					).replace(
						/<\/div$/, ''
					).replace(
						/<br\s?\/?>/g, '\n\n'
					).trim()
				),
				threadId: url.threadId,
				page: url.page
			});
			console.log(`Parsed page [${url.page}]. Got ${posts.length} entries.`);
		}, 100 * i);
	});
};

if (process.argv[5] === 'export') {
	var exportHtml = urls.map(function (url, i) {
		var pageData = Data_Page.get(url.threadId, url.page);
		var pageHtml = `## Page ${url.page}\n\n` + pageData.posts.map(function (post) {
			return `------\n\n${post.replace(/<.+?>/g, '')}\n\n`
		}).join('');
		return pageHtml;
	}).join('\n\n------\n\n').replace(/\n+/g, '\n\n');
	console.log(exportHtml);
};

if (process.argv[5] === 'rm') {
	child_process.exec(`rm ${homrdir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/html/${threadId}-*.html; rm ${homrdir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/page/${threadId}-*.json;`);
};

if (process.argv[5] === 'nuke') {
	child_process.exec(`rm ${homrdir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/html/*.html; rm ${homrdir}/.xyz.neruthes/jsu.tuoshuiba-node.v1/page/*.json;`);
};
