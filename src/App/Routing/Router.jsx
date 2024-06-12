import { NavLink, Route, Routes } from "react-router-dom";
import styles from "./Router.module.css";
import Form from "../Forms/Form";
import ListComponent from "../ApiList/ListComponent";
import DigitalClock from "../DigitalClock";
import NotFoundPage from "./NotFoundPage";
import React, { Suspense } from "react";

const ListPageLazy = React.lazy(() => import("../ApiList/ListComponent"));

function Router() {
  return (
    <>
      <div>
        <ul className={styles.nav}>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeNav}` : "";
              }}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeNav}` : "";
              }}
              to={"/forms"}
            >
              Form
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeNav}` : "";
              }}
              to={"/list"}
            >
              List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeNav}` : "";
              }}
              to={"/clock"}
            >
              Clock
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/forms" element={<Form />} />
          <Route path="/list" element={<ListPageLazy />} />
          <Route path="/clock" element={<DigitalClock />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Router;
