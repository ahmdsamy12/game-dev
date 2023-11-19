import img from "./../../images/Testimonial Image.png";
import img1 from "./../../images/Testimonial Image1.png";
import React, { useEffect, useRef } from "react";
import "./about.css";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("visible");
        } else {
          sectionRef.current?.classList.remove("visible");
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about mb-10 relative section" ref={sectionRef}>
      <div className="container">
        <div className="about-content grid grid-cols-main gap-5">
          <div className="about-box1 py-10 relative before:absolute before:w-5 before:h-full before:top-0 before:left-20 before:rounded-25 before:-z-10 before:bg-text">
            <div className="pepole bg-white shadow-2xl w-5/6 rounded-25 max-lg:w-full">
              <h3 className="p-4 rounded-2xl bg-second text-white text-2xl font-black rounded-25 max-md:text-lg max-lg:text-lg">
                This is a great course. It helped me a lot. Thank you :)
              </h3>
              <div className="info flex items-center justify-between px-8">
                <div className="info-text">
                  <h4 className="font-black">Jane Cooper</h4>
                  <p className=" max-sm:tracking-tight">Developer, Sony</p>
                </div>
                <img
                  src={img}
                  alt="person"
                  className=" -mt-3 bg-white rounded-half border-4 border-white"
                />
              </div>
            </div>
            <div className="pepole bg-white shadow-2xl w-5/6 rounded-25 mt-6 ml-6 max-lg:ml-4 max-lg:w-full">
              <h3 className="p-4 rounded-2xl bg-btn text-white text-2xl font-black rounded-25 max-sm:text-lg">
                Amazing Work! Well done!
              </h3>
              <div className="info flex items-center justify-between px-8">
                <div className="info-text">
                  <h4 className="font-black">Jacob Jones</h4>
                  <p className=" max-sm:-tracking-widest">Designer, Facebook</p>
                </div>
                <img
                  src={img1}
                  alt="img"
                  className="-mt-3 bg-white rounded-half border-4 border-white"
                />
              </div>
            </div>
          </div>
          <div className="about-box2 flex flex-col justify-center">
            <h2 className="text-text my-8 font-black text-6xl max-lg:text-3xl">
              What our students say
            </h2>
            <p className="text-text font-medium">
              All students get access to all the videos and also the source code
              of the projects. You will also have access to a private Discord
              channel where you can discuss your doubts.
            </p>
            <a
              href="#"
              className="px-8 py-2 rounded-25 bg-btn text-white mt-8 block w-fit "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
