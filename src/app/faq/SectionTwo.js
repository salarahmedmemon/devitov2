"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for page fully loaded
    const handleLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    gsap.set(sectionRef.current, { opacity: 0 }); // hide before animation
    gsap.to(sectionRef.current, { opacity: 1, duration: 0.5 }); // fade in wrapper

    // Heading from top
    gsap.from(headingRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Image & Text simultaneously
    gsap.from(imgRef.current, {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
      },
    });

    gsap.from(textRef.current, {
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });
  }, [isLoaded]);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[170vh] sm:min-h-screen md:h-screen bg-[#EEEEEE] pt-10 overflow-hidden relative"
      style={{ opacity: 0 }} // hide until loaded
    >
      <img
        src="/img/ServicesPage/SectionTwo/rightCircle.png"
        className="absolute top-[-15vw] sm:top-[-30vw] md:top-[-14vw] right-[-4vw] w-[30vw] sm:w-[35vw] md:w-[16vw] sm:right-[-10vw] md:right-0"
      />
      <div className="hidden md:block bg-white w-[50vw] h-[50vw] rounded-full p-1 absolute bottom-[-14vw] left-[-10vw]">
        <div className="w-full h-full rounded-full bg-[#EEEEEE]"></div>
      </div>

      {/* Heading */}
      {/* <div className="h-[10vh] mx-auto" ref={headingRef}>
        <div className="w-[60%] sm:w-[40%] md:w-[24%] mx-auto border-t-4 border-[#4C4886]">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[2.4vw] text-center">
            Services We Offering
          </h1>
        </div>
        <h2 className="text-[7vw] sm:text-[5vw] md:text-[3vw] text-center text-[#4C4886] font-semibold">
          Certified of Excellence
        </h2>
      </div> */}

      {/* Main content */}
      <div className="w-full mt-2 sm:mt-10 md:mt-20 flex flex-col md:flex-row items-center">
        {/* Left image */}
        <div
          className="z-10 w-full md:w-[40%] h-full flex items-center justify-center"
          ref={imgRef}
        >
          <img
            src="/img/FAQ/image03.png"
            className="w-[80vw] sm:w-[60vw] md:w-[30vw]"
          />
        </div>

        {/* Right text */}
        <div
          className="w-[60%] h-full pt-10 md:ps-7 flex flex-col items-center md:items-start"
          ref={textRef}
        >
          <div className="w-[120%] sm:w-[49%] md:w-[30%] border-l-4 border-[#4C4886]">
            <h1 className="text-[10vw] sm:text-[4vw] md:text-[2.4vw] text-center">
              Technical Faqs:
            </h1>
          </div>
          <p className="text-gray-500 text-center md:text-start mt-4 w-[95vw] sm:w-[90vw] md:w-[50vw] text-[4.2vw] sm:text-[2vw] md:text-[1.1vw]">
            We are an IT outstanding company in dubai offering an extended range of services 
            including End User Support, Application Investment, Cloud &amp; Infrastructure 
            expertise. Our on-demand IT staff outsourcing solution in Dubai specializes 
            exclusively for digital transformation, with custom software development, 
            Software Testing & QA, Cloud Computing, Mobile &amp; Web Development, Maintenance
            &amp; Support, Blockchain Consulting, &amp; Data Science.
          </p>
          <p className="text-[#4C4886] font-semibold mt-4 text-center md:text-start w-[90vw] text-[4.2vw] sm:text-[2.4vw] md:text-[1.2vw]">
            Cost-effective and Comprehensive IT Outsourcing Services:
          </p>
          <div className="text-gray-500 font-semibold sm:w-[100vw] sm:px-[4vw] sm:ps-[9vw] md:px-0 md:w-full 
          flex flex-col sm:flex-row mt-4 items-center md:items-start justify-between 
          gap-4 md:gap-0 text-[4vw] sm:text-[1.7vw] md:text-[.9vw] mb-[10vw] sm:mb-[4vw] md:mb-0">
            <div className="flex flex-col gap-2 me-[8vw] sm:me-0">
              <h3 className="text-[#4C4886] font-bold text-[5vw] sm:text-[2vw] md:text-[1.3vw]">Manage</h3>
              <ul className="ps-[1vw]">
                <li className="list-disc">
                  <a href="#">Essential IT Support</a>
                </li>
                <li className="list-disc">
                  <a href="#">Basic Security &amp; Monitoring</a>
                </li>
                <li className="list-disc">
                  <a href="#">Limited Cloud Storage</a>
                </li>
                <li className="list-disc">
                  <a href="#">24/7 Email Support</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#4C4886] font-bold text-[5vw] sm:text-[2vw] md:text-[1.3vw]">Build</h3>
              <ul className="ps-[1vw]">
                <li className="list-disc">
                  <a href="#">Advanced IT Support &amp; Maintenance</a>
                </li>
                <li className="list-disc">
                  <a href="#">Enhanced Security &amp; Threat Detection</a>
                </li>
                <li className="list-disc">
                  <a href="#">Increased Cloud Storage</a>
                </li>
                <li className="list-disc">
                  <a href="#">24/7 Email Support</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 sm:pe-[1vw]">
              <h3 className="text-[#4C4886] font-bold text-[5vw] sm:text-[2vw] md:text-[1.3vw]">General</h3>
              <ul className="ps-[1vw]">
                <li className="list-disc">
                  <a href="#">Fully Managed IT Services</a>
                </li>
                <li className="list-disc">
                  <a href="#">Enterprise Level Security &amp; Backups</a>
                </li>
                <li className="list-disc">
                  <a href="#">Unlimited Cloud Storage &amp; Backups</a>
                </li>
                <li className="list-disc">
                  <a href="#">24/7 Priority Support (Phone, Chat, Email)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
