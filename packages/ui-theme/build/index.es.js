/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var heading = {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
};
var base = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "inherit",
        monospace: "Menlo, monospace",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    colors: {
        text: "#000",
        background: "#fff",
        primary: "#07c",
        secondary: "#30c",
        muted: "#f6f6f6",
    },
    styles: {
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body",
        },
        h1: __assign(__assign({}, heading), { fontSize: 5 }),
        h2: __assign(__assign({}, heading), { fontSize: 4 }),
        h3: __assign(__assign({}, heading), { fontSize: 3 }),
        h4: __assign(__assign({}, heading), { fontSize: 2 }),
        h5: __assign(__assign({}, heading), { fontSize: 1 }),
        h6: __assign(__assign({}, heading), { fontSize: 0 }),
        p: {
            color: "text",
            fontFamily: "body",
            fontWeight: "body",
            lineHeight: "body",
        },
        a: {
            color: "primary",
        },
        pre: {
            fontFamily: "monospace",
            overflowX: "auto",
            code: {
                color: "inherit",
            },
        },
        code: {
            fontFamily: "monospace",
            fontSize: "inherit",
        },
        table: {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
        },
        th: {
            textAlign: "left",
            borderBottomStyle: "solid",
        },
        td: {
            textAlign: "left",
            borderBottomStyle: "solid",
        },
        img: {
            maxWidth: "100%",
        },
    },
};

export default base;
export { base };
//# sourceMappingURL=index.es.js.map
