import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/diuLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mx-auto px-2 bg-[#1F1F52] sm:px-6 lg:px-44">
        <div>
          <footer class="py-4 bg-[#1F1F52] shadow  md:py-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
              <Link to="/home" class="flex items-center mb-4 sm:mb-0">
                <img src={logo} class="mr-3 h-8" alt="Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  CSE DIU Alumni
                </span>
              </Link>
              <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-100 sm:mb-0 ">
                <li>
                  <Link to="/about-us" class="mr-4  md:mr-6 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" class="mr-4  md:mr-6">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" class="mr-4  md:mr-6 ">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/notice-board" class="">
                    Notice Board
                  </Link>
                </li>
              </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-gray-100 sm:text-center">
              © 2022{" "}
              <Link to="/home" class="">
                CSE DIU Alumni
              </Link>
              . All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
