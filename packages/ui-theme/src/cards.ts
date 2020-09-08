const base = {
  display: "grid",
  p: "2rem",
  bg: "#BCFFE0",
  color: "text",
  boxShadow: "0px 16px 24px rgba(211, 255, 235, 0.2)",
  borderRadius: "20px",
  ".heading": {
    maxWidth: "16rem",
  },
};
export const cards = {
  primary: base,
  brightGreen: base,
  skyBlue: {
    ...base,
    bg: "#AE94FD",
    color: "#D3FFEB",
  },
  midnight: {
    ...base,
    bg: "#5B5C71",
    color: "#C9B7FD",
  },
  lobster: {
    ...base,
    bg: "#E39D76",
    color: "#FEFAFB",
  },
}; /* 16dp shadow */
