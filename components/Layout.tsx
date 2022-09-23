import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
