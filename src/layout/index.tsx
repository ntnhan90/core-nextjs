import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Loader from "./loader";

interface LayoutDashBoardProps {
  children?: React.ReactNode;
  className?: string;
}
const Layout = ({ children, className }: LayoutDashBoardProps) => {
  return (
    <Fragment>
      <div className={`page-wrapper`} id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar  />
          <div className="col-10 " style={{ minHeight: "900px" }}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};
export default Layout;