import React from "react";
import Layout from "../../templates/Page/deck";

const CustomLayout = ({ element, props }) => {
  console.log("mounted");
  return <Layout {...props}>{element}</Layout>;
};

export default CustomLayout;
