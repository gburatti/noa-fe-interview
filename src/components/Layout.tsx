import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import images from "../assets/images";

export const Layout = () => {
  const location = useNavigate()
  const handleClick=()=>{
      location('/')
    }
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo" onClick={handleClick}>
          <img src={images.logo} alt="Noa logo" />
        </div>
        <nav className="nav">
          <div>
            <Link to="/" className="navItem">Map</Link>
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
