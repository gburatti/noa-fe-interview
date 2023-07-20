import React from "react";
import { Link, Outlet } from "react-router-dom";
import images from "../assets/images";

export const Layout = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="logo">
          <img src={images.logo} alt="Noa logo" />
        </Link>
        <nav className="nav">
          <div>
            <Link to="/map" className="navItem">Map</Link>
          </div>
          <div>
            <Link to="/stats" className="navItem">Stats</Link>
          </div>
        </nav>
      </div>

      <div className="fullscreen">
        <Outlet />
      </div>
    </div>
  );
}
