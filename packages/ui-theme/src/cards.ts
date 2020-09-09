const base = {
  display: "grid",
  p: "2rem",
  gridRow: 1,
  gridColumn: 1,
  width: "100%",
  minWidth: ["auto", "30rem"],
  maxWidth: ["90vw", "auto"],
  minHeight: "20rem",
  bg: "#BCFFE0",
  color: "text",
  borderRadius: "20px",
  boxShadow: "0px 16px 24px rgba(211, 255, 235, 0.2)",
};
export const cards = {
  primary: base,
  brightGreen: base,
  skyBlue: {
    ...base,
    bg: "#AE94FD",
    color: "#D3FFEB",
    boxShadow: "0px 16px 24px rgba(211, 255, 235, 0.2)",
  },
  midnight: {
    ...base,
    bg: "#5B5C71",
    color: "#C9B7FD",
    boxShadow: "0px 16px 24px rgba(173, 173, 184, 0.2)",
  },
  lobster: {
    ...base,
    bg: "#E39D76",
    color: "#FEFAFB",
    boxShadow: "0px 16px 24px rgba(237, 189, 164, 0.2)",
  },
}; /* 16dp shadow */
