import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <ul className="nav justify-content-center border-bottom border-secondary pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-secondary m-0">
          © 2025 Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
