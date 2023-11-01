import { useRouter } from "next/router";
import React, { Fragment } from "react";

const TITLE_DASHBOARD = [
  "dashboard",
  "store preferences",
  "create QR",
  "opening hours",
  "category settings",
  "modifier groups",
  "menu settings",
  "staff registration",
  "order list",
  "alert list",
  "statistics",
  "customer center",
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Fragment>
      <div className="row h-100" style={{ minHeight: "900px" }}>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar col-2"
          style={{ minHeight: "900px", backgroundColor: "#eeece1" }}
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush ">
              {TITLE_DASHBOARD.map((item: string, index: number) => (
                <a
                  key={index}
                  href={`/${item.replace(/ /g, "-")}`}
                  className={`list-group-item list-group-item-action py-2 ripple text-capitalize pt-3 pb-3 align-items-center${
                    item.replace(/ /g, "-") === pathname.slice(1) && " active"
                  }`}
                >
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>{item}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
       
      </div>
    </Fragment>
  );
};

export default Sidebar;
