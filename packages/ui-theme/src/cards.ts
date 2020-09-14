const base = {
  display: "grid",
  p: "2rem",
  pb: "4rem",
  width: "100%",
  minWidth: ["auto", "20rem"],
  maxWidth: ["90vw", "30rem"],
  minHeight: "20rem",
  bg: "#BCFFE0",
  color: "text",
  borderRadius: "20px",
  boxShadow: "0px 40px 80px rgba(217, 201, 205, 0.3)",
  h1: {
    mb: 5,
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
