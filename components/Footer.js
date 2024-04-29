import React from "react";
import "@/components/Styles/footer.css";

const Footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="heading">
          <h2>
            Ecoyaan<sup>™</sup>
          </h2>
        </div>
        <div class="content">
          <div class="services">
            <h4>Company</h4>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">Sell on Ecoyaan</a>
            </p>
            <p>
              <a href="#">Careers</a>
            </p>
          </div>
          <div class="social-media">
            <h4>Socials</h4>
            <p>
              <a href="#">Links</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Terms of Use</a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Blogs</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>Pune, India</p>
            <h4 class="mobile">Mobile</h4>
            <p>
              <a href="#">+91-12225*****</a>
            </p>
            <h4 class="mail">Email</h4>
            <p>
              <a href="#">madyoffficial@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
