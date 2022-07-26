/**
 * @Layout form next-js
 * @lear more about Layout -> https://nextjs.org/docs/basic-features/layouts
 * these components are often reused between pages
 */
import React from "react";
import Navbar from "../component/header/index";
import Footer from "../component/footer/index";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
