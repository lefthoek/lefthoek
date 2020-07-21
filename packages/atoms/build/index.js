'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var gatsby = require('gatsby');

var logoStyles = {
    fontSize: [3, 4, 5],
};

var Logo = function (_a) {
    var children = _a.children, href = _a.href;
    return href ? (themeUi.jsx(gatsby.Link, { sx: logoStyles, to: href }, children)) : (themeUi.jsx(themeUi.Box, { sx: logoStyles }, children));
};

exports.Logo = Logo;
//# sourceMappingURL=index.js.map
