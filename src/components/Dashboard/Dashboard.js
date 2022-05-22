import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import "./Dashboard.css"

const Dashboard = () => {
  const { pathname } = useLocation();

    return (
      <div className="my-5 d-flex">
        <div className="dashboard-sidebar shadow  ms-5 mb-5 pt-5">
          <div className="d-flex justify-content-center">
            <NavLink
              className={({ isActive }) =>
                isActive ? `dashboard-active-link ` : `dashboard-inactive-link `
              }
              to="/dashboard/my-orders"
            >
              My Orders
            </NavLink>
          </div>
          <div className="d-flex justify-content-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `dashboard-active-link  my-4`
                  : `dashboard-inactive-link my-4 `
              }
              to="/dashboard/add-review"
            >
              Add Review
            </NavLink>
          </div>
          <div className="d-flex justify-content-center">
            <NavLink
              className={({ isActive }) =>
                isActive ? `dashboard-active-link ` : `dashboard-inactive-link `
              }
              to="/dashboard/my-profile"
            >
              My Profile
            </NavLink>
          </div>
        </div>
        <div className="w-75">
          <div
            className={
              pathname === "/dashboard/my-orders" ||
              pathname === "/dashboard/add-review" ||
              pathname === "/dashboard/my-profile"
                ? `d-none`
                : `d-block`
            }
          >
            <h1 className="text-center text-success">
              Welcome To Your Dashboard
            </h1>

            <div className="d-flex justify-content-center align-items-center ">
              <img
                className="w-50"
                src="https://img.freepik.com/free-vector/engineers-team-discussing-issues-construction-site_74855-4786.jpg?t=st=1653220685~exp=1653221285~hmac=ac9a03337455ca0cb9376e6c8cb09c609d072cb1b85be7d4048b1a0fb957a5bc&w=740"
                alt="img"
              />
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;