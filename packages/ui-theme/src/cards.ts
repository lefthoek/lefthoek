const base = {
  display: "grid",
  p: "2rem",
  width: "100%",
  minWidth: ["auto", "20rem"],
  maxWidth: ["90vw", "30rem", "40rem"],
  minHeight: "20rem",
  bg: "#AE94FD",
  color: "muted",
  borderRadius: "20px",
  boxShadow: "0px 40px 80px rgba(217, 201, 205, 0.3);",
  h1: {
    mb: 5,
  },
};
export const cards = {
  primary: base,
  brightGreen: {
    ...base,
    bg: "#BCFFE0",
    color: "text",
  },
  skyBlue: base,
  midnight: {
    ...base,
    bg: "#5B5C71",
  },
  lobster: {
    ...base,
    bg: "#E39D76",
  },
}; /* 16dp shadow */
