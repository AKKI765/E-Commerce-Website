import React from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "82vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
