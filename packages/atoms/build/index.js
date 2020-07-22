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

var cardStyles = {
    display: "grid",
    boxShadow: "13px 10px 23px 13px rgba(230,225,230,1)",
    p: "1rem",
};

var Card = function (_a) {
    var children = _a.children, className = _a.className;
    return (themeUi.jsx("article", { sx: cardStyles, className: className }, children));
};

exports.Card = Card;
exports.Logo = Logo;
//# sourceMappingURL=index.js.map
