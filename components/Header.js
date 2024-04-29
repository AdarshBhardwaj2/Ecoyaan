import Link from "next/link";
import React from "react";
import "@/components/Styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="top">
        <h2 className="ecoyaan">Ecoyaan</h2>
        <div className="nav">
          <Link className="side" href="/">
            Home
          </Link>
          <Link className="side" href="/About">
            About Us
          </Link>
          <Link className="side" href="/">
            Courses
          </Link>
          <Link className="side" href="/">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
