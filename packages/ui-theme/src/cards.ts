const base = {
  display: "grid",
  p: "2rem",
  gridRow: 1,
  gridColumn: 1,
  width: "100%",
  bg: "#BCFFE0",
  color: "text",
  borderRadius: "20px",
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
