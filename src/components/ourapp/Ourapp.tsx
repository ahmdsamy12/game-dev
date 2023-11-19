import img from "./../../images/Frame 3.png";
import img1 from "./../../images/Frame 4.png";
import { useEffect, useRef } from "react";

const Ourapp = () => {
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
    <div className="ourapp my-20 section" ref={sectionRef}>
      <div className="container">
        <div className="our-content">
          <div className="our-box1 text-center">
            <h2 className="font-black text-text text-5xl mb-4">Get our App</h2>
            <p className="font-black text-text mb-12">
              You can use our App for better experience on smartphones
            </p>
          </div>
          <div className="our-box2 flex gap-5 justify-center flex-wrap">
            <img src={img} alt="img" />
            <img src={img1} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourapp;
