import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h5 className="mt-3">
              <Link to="/about" className="text-white">
                About
              </Link>{" "}
              |{" "}
              <Link to="/contact" className="text-white">
                Contact
              </Link>{" "}
              |{" "}
              <Link to="/policy" className="text-white">
                Privacy Policy
              </Link>
            </h5>
            <p className="text-white">All Rights Reserved &copy; 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
