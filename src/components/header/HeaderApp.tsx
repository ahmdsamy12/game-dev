import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import img from "./../../images/Logo1.png";
import img1 from "./../../images/hero-image1 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import LazyLoadingImage from "../lazy loading/LazyLoading";
import "./sticky.css";

const HeaderApp = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center font-black max-lg:justify-center"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center font-black max-lg:justify-center"
        >
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center  font-black max-lg:justify-center"
        >
          Our Work
        </a>
      </Typography>
    </ul>
  );

  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setIsSticky(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <header className=" bg-gradient-to-t from-main to-second mb-10">
      <div
        className={`navbar bg-second text-white p-1 ${
          isSticky ? "fixed top-0 w-full z-50" : ""
        }`}
        id="navbar"
        ref={navbarRef}
      >
        <Navbar className="h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparient max-sm:bg-second">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <img src={img} alt="logo" className="bg-black" />
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block bg-text rounded-25"
                >
                  <span>Enrol Now</span>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden absolute top-3 right-5"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button
                fullWidth
                variant="gradient"
                size="sm"
                className="bg-btn w-fit my-0 mx-auto rounded-25"
              >
                <span>Enrol Now</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
      <div className="header-landing pt-20 mt-10 max-sm:mt-5">
        <div className="container">
          <div className="landing-content grid grid-cols-main gap-4">
            <div className="landig-box1">
              <h1 className="text-white font-black my-5 text-6xl max-sm:text-4xl max-lg:text-4xl">
                Learn the art of Game Dev
              </h1>
              <p className="text-white w-2/3 max-sm:w-full max-lg:w-full">
                This is a comprehensive course on Game Development. You will
                learn everything from generating an idea to publishing your
                games to different platforms.
              </p>
              <a
                href="#"
                className="py-2 px-6 bg-btn text-white mt-4 rounded-25 block w-fit"
              >
                <FontAwesomeIcon icon={faPenToSquare} /> Enrol Now
              </a>
            </div>
            <div className="landig-box2 flex justify-center items-center">
              <div className="box2-one">
                <div className="studients bg-white px-2 py-2 rounded-25 w-fit mb-20 shadow-xl">
                  <h3 className="text-center text-black font-black">32K</h3>
                  <p className="text-center tracking-tight">
                    Students Enrolled
                  </p>
                </div>
                <div className="rating bg-white px-2 rounded-25 w-fit shadow-xl py-2">
                  <h3 className="text-center text-black font-black">
                    4.7{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-gold ml-1 font-black"
                    />
                  </h3>
                  <p className="text-center tracking-tight">Overall Rating</p>
                </div>
              </div>
              <div className="box2-two">
                <LazyLoadingImage src={img1} alt="image" classN="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
