"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = ({ topTitle, mainTitle, mainImage, sectionTitle, description, highlightText, boxes }) => {
    // Refs
    const topRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        // Title (from top)
        if (topRef.current) {
            gsap.fromTo(
                topRef.current,
                { y: -150, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: topRef.current,
                        start: "top 80%", // when 80% of viewport reached
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Left image
        if (leftRef.current) {
            gsap.fromTo(
                leftRef.current,
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Right content
        if (rightRef.current) {
            gsap.fromTo(
                rightRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    return (
        <div className="w-full bg-[#EEEEEE] pb-10">
            {/* Title */}
            <div ref={topRef} className="text-center w-[65vw] sm:w-[34vw] md:w-[18vw] mx-auto pt-[4vw]">
                <h1 className="text-[9vw] sm:text-[5vw] md:text-[2.4vw] border-t-3 border-t-[#4C4886]">
                    {topTitle}
                </h1>
                <h2 className="text-[8.9vw] sm:text-[4.9vw] md:text-[2.3vw] leading-[6vw] sm:leading-[4vw] md:leading-[3vw] text-[#4C4886] font-semibold">
                    {mainTitle}
                </h2>
            </div>

            <div className="w-full h-[70vh] mt-[30vw] sm:mt-[7vw] md:mt-[2vw] flex flex-col md:flex-row items-center justify-center">
                {/* Left image */}
                <div ref={leftRef} className="w-full sm:w-[50%] h-full flex items-center justify-center mt-[9vw] sm:mt-[20vw] md:mt-0">
                    <img src={mainImage} className="w-[90vw] sm:w-[45vw]" />
                </div>

                {/* Right content */}
                <div ref={rightRef} className="w-[80%] md:w-[50%] h-full p-[2vw]">
                    <h3 className="text-[8vw] sm:text-[4vw] md:text-[2vw] border-l-3 border-l-[#4C4886] ps-[1.8vw] sm:ps-[1vw] md:ps-[.6vw]">
                        {sectionTitle}
                    </h3>
                    <p className="mt-[1.8vw] md:mt-[1vw] text-[4.6vw] sm:text-[2vw] md:text-[1vw]">
                        {description}
                    </p>
                    <p className="text-[#4C4886] font-extrabold sm:font-bold text-[5vw] sm:text-[2.4vw] md:text-[1vw] my-[3vw] sm:my-[1.8vw] md:my-[1vw]">
                        {highlightText}
                    </p>
                    <div className="w-full h-[40vh] flex items-center justify-center gap-4">
                        {boxes.map((box, idx) => (
                            <div key={idx} className="w-[35%] h-full">
                                <h3 className="text-[#4C4886] font-bold">{box.title}</h3>
                                <p className="text-[3.4vw] sm:text-[2vw] md:text-[1vw]">{box.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
