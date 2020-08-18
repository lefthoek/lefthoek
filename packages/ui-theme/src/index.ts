const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
};

const colors = {
  white: "#FFFFFF",
  midnight: "#32334E",
  cipria: "#FCF2F5",
  lobster: "#D15B1B",
  skyBlue: "#784CFB",
  brightGreen: "#90FFCC",
};

export const base = {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 80],
  cards: {
    primary: {
      display: "grid",
      p: "1rem",
      m: "1rem",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      bg: "background",
    },
    secondary: {
      display: "grid",
      p: "1rem",
      m: "1rem",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      bg: "muted",
    },
  },
  fonts: {
    body: 'Spartan, Roboto, "Helvetica Neue", sans-serif',
    heading: 'Spartan, Roboto, "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  buttons: {
    menu: {
      bg: "text",
      color: "bg",
      height: "3rem",
      borderRadius: 0,
      width: "3rem",
      "> svg": {
        fill: colors.cipria,
      },
      "&:active, &:focus": {
        outline: "none",
      },
    },
  },
  text: {
    smallBody: {
      color: "text",
      fontFamily: "body",
      fontWeight: 400,
      lineHeight: "25px",
      fontSize: 1,
    },
    heading: {
      ...heading,
      fontSize: 4,
      mb: 5,
    },
    subHeading: {
      ...heading,
      fontSize: 3,
      fontWeight: "bold",
      lineHeight: "body",
      mb: 2,
    },
  },
  fontSizes: [14, 16, 18, 20, 24, 34, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    subHeading: 2,
  },
  primaryColors: [
    colors.cipria,
    colors.midnight,
    colors.brightGreen,
    colors.skyBlue,
    colors.lobster,
  ],
  colors: {
    text: colors.midnight,
    muted: colors.cipria,
    primary: colors.skyBlue,
    background: colors.white,
    accent: colors.brightGreen,
    highlight: colors.brightGreen,
    secondary: colors.lobster,
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      ...heading,
      fontWeight: 500,
      lineHeight: "70px",
      fontSize: 7,
    },
    h2: {
      ...heading,
      fontWeight: 600,
      lineHeight: "64px",
      fontSize: 6,
    },
    h3: {
      ...heading,
      fontWeight: 600,
      lineHeight: "38px",
      fontSize: 5,
    },
    h4: {
      ...heading,
      fontWeight: 700,
      lineHeight: "30px",
      fontSize: 4,
    },
    h5: {
      ...heading,
      fontWeight: 700,
      color: "primary",
      borderBottom: "1px solid lightgray",
      pb: "0.5rem",
      textTransform: "uppercase",
      lineHeight: "20px",
      letterSpacing: 1,
      fontSize: 1,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: 500,
      fontSize: 2,
      lineHeight: "28px",
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
