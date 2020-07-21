import { jsx, Box } from 'theme-ui';
import { Link } from 'gatsby';

var logoStyles = {
    fontSize: [3, 4, 5],
};

var Logo = function (_a) {
    var children = _a.children, href = _a.href;
    return href ? (jsx(Link, { sx: logoStyles, to: href }, children)) : (jsx(Box, { sx: logoStyles }, children));
};

export { Logo };
//# sourceMappingURL=index.es.js.map
