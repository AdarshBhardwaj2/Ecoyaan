import Link from "next/link";
import React from "react";
import "@/components/Styles/header.css";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

<link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
  rel="stylesheet"
/>;

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <Link className="ecoyaan" href="/">
              <h1>Ecoyaan</h1>
            </Link>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <Link className="side" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="side" href="/About">
                About Us
              </Link>
            </li>
            <li>
              <Link className="side" href="/">
                Courses
              </Link>
            </li>
            <li>
              <Link className="side" href="/">
                Product
              </Link>
            </li>

            <label for="check" className="close-menu">
              <IoClose className="fas fa-times" />
            </label>
          </span>
          <label for="check" className="open-menu">
            <RiMenu3Fill className="fas fa-bars" />
          </label>
        </ul>
      </nav>

      {/* <div className="top">
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
          <RiMenu3Fill className="icon" />
        </div>
      </div> */}
    </div>
  );
};

export default Header;
