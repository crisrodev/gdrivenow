var path = require('path');
const url = require('url');

var appRoot = path.join(__dirname, '.');

require('electron-compile').init(appRoot, require.resolve('./src/app'));