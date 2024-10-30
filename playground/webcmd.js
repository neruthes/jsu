const app = require('some-web-backend-framework').newApp();
const WebCMD = {};


// Accept command definition
WebCMD.define = function (req, res) {
    // TODO
};
WebCMD.exec = function (cmd, args, env, req, res) {
    // TODO
};

// Generic entry point
WebCMD.entrypoint = function (req, res) {
    const cmdline = JSON.parse(req.body);
    const env = {}; // Verify header token here to set USER/EXPIRY/etc
    WebCMD.exec(cmdline.cmd, cmdline.args, env, req, res);
};

// Implement some commands
WebCMD.define('whoami', function (cmd, args, env, req, res) {
    res.writeHead(200);
    res.end(JSON.stringify({
        // TODO
    }));
})

app.post(`/api/webcmd`, WebCMD.entrypoint);


