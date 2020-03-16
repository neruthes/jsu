`
node zhikanlouzhu-list-node.js ["fetch", "parse", "export"] {tiebaId} {beginPage} {endPage} {keyword}
`

const fs = require('fs');
const request = require('request');
const child_process = require('child_process');
const homedir = require('os').homedir();

// ----------------------------------
const newLineMark = `__d0cea48fb583f5__`;
// ----------------------------------

let verb = process.argv[2];
let tiebaId = encodeURI(process.argv[3]);
let normalizedTiebaId = 't_' + '_' + encodeURI(process.argv[3]).replace(/%/g, '');
let beginPage = parseInt(process.argv[4]) || 1;
let endPage = parseInt(process.argv[5]) || 2;
let keyword = process.argv[6];

if (process.argv.length < 6) {
	console.log('Insufficient arguments. Exit 1.');
	return 1;
};

child_process.exec(`
mkdir ${homedir}/.xyz.neruthes/
mkdir ${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-list-node.v1
mkdir ${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/html
mkdir ${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/page
`);

const Data_Html = {
	get: function (tiebaId, page) {
		return fs.readFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/html/${normalizedTiebaId}-${page}.html`).toString();
	},
	set: function (tiebaId, page, html) {
		fs.writeFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/html/${normalizedTiebaId}-${page}.html`, html);
	}
};

const Data_Page = {
	get: function (tiebaId, page) {
		return JSON.parse(fs.readFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/page/${normalizedTiebaId}-${page}.json`).toString());
	},
	set: function (tiebaId, page, dataObj) {
		fs.writeFileSync(`${homedir}/.xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/page/${normalizedTiebaId}-${page}.json`, JSON.stringify(dataObj, null, '\t'));
	}
};

let urls = (new Array(endPage-beginPage+1)).fill(1).map((x, i) => beginPage+i).map(page => ({
	url: `https://zhikanlouzhu.com/post/tieba/${tiebaId}/${page}.html`,
	tiebaId: tiebaId,
	normalizedTiebaId: normalizedTiebaId,
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
				Data_Html.set(url.tiebaId, url.page, html);
				console.log(`Saved html: ${decodeURIComponent(url.url)}`);
			});
		}, 4500 * i);
	});
};

if (verb === 'parse') {
	urls.map(function (url, i) {
		setTimeout(function () {
			var html = Data_Html.get(url.tiebaId, url.page).replace(/>\s+/g, '>');
			// return 1;
			var posts = html.match(new RegExp(`href="/post/tieba/[^/]+/([0-9]+)/1.html" title="([^"]+)"`, 'g')).map(x => x.replace(/"/g, '').replace('href=/post/tieba/', '').split('/1.html title=')).filter(x => x[0].split('/')[0] === decodeURIComponent(tiebaId));
			console.log(posts);
			Data_Page.set(url.tiebaId, url.page, {
				posts: posts,
				tiebaId: url.tiebaId,
				page: url.page
			});
			console.log(`Parsed page [${url.page}]. Got ${posts.length} entries.`);
		}, 100 * i);
	});
};

if (verb === 'export') {
	var queryResult = urls.map(function (url, i) {
		var pageData = {
			url: url,
			data: Data_Page.get(url.tiebaId, url.page)
		};
		return pageData;
	});
	if (keyword !== undefined) {
		queryResult = queryResult.map(function (pageData) {
			return {
				url: pageData.url,
				data: {
					posts: pageData.data.posts.filter(post => post[1].indexOf(keyword) > -1),
					tiebaId: pageData.data.tiebaId,
					page: pageData.data.page
				}
			};
		});
	};
	var htmlResult = queryResult.map(function (pageData) {
		var pageHtml = `## Page ${pageData.url.page}\n\n` + pageData.data.posts.map(function (post) {
			return post.join('\n') + '\n\n';
		}).join('');
		return pageHtml;
	});
	var exportHtml = htmlResult.join('\n\n\n\n------\n\n\n\n').replace(/\n{2,99}/g, '\n\n');
	console.log(exportHtml);
};

if (verb === 'rm') {
	child_process.exec(`rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/html/${normalizedTiebaId}-*.html; rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/page/${normalizedTiebaId}-*.json;`);
};

if (verb === 'nuke') {
	child_process.exec(`rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/html/*.html; rm ${homrdir}/xyz.neruthes/jsu.zhikanlouzhu-list-node.v1/page/*.json;`);
};
