import { faFaceAngry, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-foot text-white py-20">
      <div className="container">
        <div className="footer-content">
          <ul className="grid grid-cols-main gap-5">
            <li className=" max-sm:my-0 max-sm:mx-auto">
              <h3 className="text-btn font-black mb-4">Quick Links</h3>
              <a href="#" className="block mb-2">
                About Us
              </a>
              <a href="#" className="block mb-2">
                Contact Us
              </a>
              <a href="#" className="block mb-2">
                Privacy Policy
              </a>
              <a href="#" className="block mb-2">
                Terms & Conditions
              </a>
            </li>
            <li className=" max-sm:my-0 max-sm:mx-auto">
              <h3 className="text-btn font-black mb-4">Course</h3>
              <a href="#" className="block mb-2">
                Log In
              </a>
              <a href="#" className="block mb-2">
                Download
              </a>
              <a href="#" className="block mb-2">
                All Courses
              </a>
            </li>
            <li className=" max-sm:my-0 max-sm:mx-auto">
              <h3 className="text-btn font-black mb-6 max-sm:my-0 max-sm:text-center max-sm:mb-2">
                Contact Us
              </h3>
              <p className="mb-4 max-sm:my-0 max-sm:text-center max-sm:mb-2">
                contact@email.com
              </p>
              <div className="icons mb-4 max-sm:my-0 max-lg:text-center max-sm:mb-2">
                <FontAwesomeIcon icon={faFaceAngry} className="mr-2" />
                <FontAwesomeIcon icon={faInbox} />
              </div>
              <form onSubmit={(e) => e.preventDefault()} className=" relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-25 max-sm:text-sm"
                />
                <button
                  type="submit"
                  className=" absolute top-1 right-2 text-white py-1 px-4 rounded-25 bg-foot "
                >
                  Subscribe
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
