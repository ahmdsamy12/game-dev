import { faClock, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./../../images/Rectangle 7.png";
import img1 from "./../../images/Rectangle 8.png";
import LazyLoadingImage from "../lazy loading/LazyLoading";
import { useEffect, useRef } from "react";

const Course = () => {
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
    <div
      className="course bg-gradient-to-t from-main to-second pb-20 mb-4 relative section"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-center text-white font-black text-4xl py-10">
          Our Courses
        </h2>
        <div className="course-content grid grid-cols-main gap-6">
          <div className="course-box1 bg-white px-6 rounded-25 h-fit">
            <LazyLoadingImage src={img} alt="image" classN="w-full" />
            <h3 className="text-text font-black text-3xl mt-4">
              Game Design Essentials
            </h3>
            <span className=" text-right block pb-10 text-text font-black  border-b-main rounded-b-25 border-b-8">
              <FontAwesomeIcon icon={faClock} /> 8 HRS
            </span>
          </div>
          <div className="course-box2 bg-white px-6 rounded-25">
            <LazyLoadingImage src={img1} alt="image1" classN="w-full" />
            <h3 className="text-text font-black text-3xl mt-4">
              {" "}
              Unity Game Engine Fundamentals
            </h3>
            <span className="text-right block pb-3 text-text font-black  border-b-main rounded-b-25 border-b-8">
              <FontAwesomeIcon icon={faClock} /> 8 HRS
            </span>
          </div>
        </div>
        <a
          href="#"
          className="py-2 px-6 bg-btn text-white my-6 block text-right w-fit rounded-25 absolute -bottom-2 right-3"
        >
          All Courses
        </a>
      </div>
    </div>
  );
};

export default Course;
