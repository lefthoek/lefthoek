import { jsx, Box } from 'theme-ui';
import { Link } from 'gatsby';

var logoStyles = {
    fontSize: [3, 4, 5],
};

var Logo = function (_a) {
    var children = _a.children, href = _a.href;
    return href ? (jsx(Link, { sx: logoStyles, to: href }, children)) : (jsx(Box, { sx: logoStyles }, children));
};

var cardStyles = {
    display: "grid",
    boxShadow: "13px 10px 23px 13px rgba(230,225,230,1)",
    p: "1rem",
};

var Card = function (_a) {
    var children = _a.children, className = _a.className;
    return (jsx("article", { sx: cardStyles, className: className }, children));
};

export { Card, Logo };
//# sourceMappingURL=index.es.js.map
