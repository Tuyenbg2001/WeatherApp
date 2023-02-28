import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Hour from "./hour/Hour";
import Today from "./today/Today";
import Week from "./week/Week";
function Detail({ data }) {
  return (
    <div className=" res col-md-9 col-sm-12 p-4 overflow-auto content">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="nav d-flex align-item-center justify-content-start fs-5 fw-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-item m-2 border-bottom border-3 border-dark text-gray-500 text-decoration-none text-dark"
                : "nav-item m-2 text-decoration-none text-dark"
            }
          >
            Today
          </NavLink>
          <NavLink
            to="/week"
            className={({ isActive }) =>
              isActive
                ? "nav-item m-2 border-bottom border-3 border-dark text-decoration-none text-dark"
                : "nav-item m-2 text-decoration-none text-dark"
            }
          >
            Week
          </NavLink>
          <NavLink
            to="/hour"
            className={({ isActive }) =>
              isActive
                ? "nav-item m-2 border-bottom border-3 border-dark text-decoration-none text-dark"
                : "nav-item m-2 text-decoration-none text-dark"
            }
          >
            Hour
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Today />}></Route>
        <Route path="/week" element={<Week />}></Route>
        <Route path="/hour" element={<Hour />}></Route>
      </Routes>
    </div>
  );
}

export default Detail;
