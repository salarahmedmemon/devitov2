"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = () => {
    // 1. states/hook variables
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        
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

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[60vh] sm:h-[90vh] md:h-screen bg-[#EEEEEE] relative overflow-hidden">
            <div className="hidden sm:block w-[40vw] h-[40vw] bg-white rounded-full p-1 absolute bottom-[-13vw] left-[-8vw]">
                <div className="w-full h-full bg-[#EEEEEE] rounded-full"></div>
            </div>
            <div className="hidden sm:block w-[25vw] h-[25vw] rounded-full bg-[#C0D6EF] p-[.2vw] absolute top-4 right-[-12vw]">
                <div className="w-full h-full rounded-full bg-[#E3E8EE]"></div>
            </div>

            <div className="w-full h-full mt-[1vw] flex flex-col md:flex-row items-center justify-center">
                <div ref={leftRef} className="w-full md:w-[50%] h-[20vh] sm:sh-full flex items-center justify-center z-1000">
                    <img src="/img/CareersPage/image04.png" className="w-[70vw] sm:w-[50vw] md:w-[25vw] pt-[20vw] sm:pt-[25vw] md:pt-0" />
                </div>
                <div ref={rightRef} className="w-full md:w-[50%] h-full pt-[23vw] sm:pt-[26vw] md:pt-[8vw] ps-[6vw] md:ps-0 md:me-[8vw] z-1000">
                    <p className="text-[4vw] sm:text-[2.6vw] md:text-[1.6vw] text-[#525252]">Why Choose Us?</p>
                    <h1 className="text-[#4C4886] font-semibold text-[6vw] sm:text-[4vw] md:text-[2.6vw]">Safegaurd Your Brand With Cyber Security And IT Solutions</h1>
                    <div className="w-full md:w-[50vw] h-[20vh] mt-[4vw] flex flex-wrap items-center gap-4">
                        <div className="w-[45%] py-2 sm:py-3 md:py-2 rounded border-l-2 border-[#4C4886] flex items-center ps-[6vw] sm:ps-[5vw] md:ps-[3vw] bg-white text-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                            <ul className="list-disc font-semibold text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw]"><li>Remote IT Assistance</li></ul>
                        </div>

                        <div className="w-[45%] py-2 sm:py-3 md:py-2 rounded border-l-2 border-[#4C4886] flex items-center ps-[6vw] sm:ps-[5vw] md:ps-[3vw] bg-white text-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                            <ul className="list-disc font-semibold text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw]"><li>Cloud Services</li></ul>
                        </div>

                        <div className="w-[45%] py-2 sm:py-3 md:py-2 rounded border-l-2 border-[#4C4886] flex items-center ps-[6vw] sm:ps-[5vw] md:ps-[3vw] bg-white text-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                            <ul className="list-disc font-semibold text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw]"><li>Managed IT Service</li></ul>
                        </div>

                        <div className="w-[45%] py-2 sm:py-3 md:py-2 rounded border-l-2 border-[#4C4886] flex items-center ps-[6vw] sm:ps-[5vw] md:ps-[3vw] bg-white text-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                            <ul className="list-disc font-semibold text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw]"><li>Remote IT Assistance</li></ul>
                        </div>

                        <div className="w-[45%] py-2 sm:py-3 md:py-2 rounded border-l-2 border-[#4C4886] flex items-center ps-[6vw] sm:ps-[5vw] md:ps-[3vw] bg-white text-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                            <ul className="list-disc font-semibold text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw]"><li>Practice IT Management</li></ul>
                        </div>

                        <div className="w-[45%] py-2 sm:py-3 md:py-2 rounded border-l-2 border-[#4C4886] flex items-center ps-[6vw] sm:ps-[5vw] md:ps-[3vw] bg-white text-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                            <ul className="list-disc font-semibold text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw]"><li>Remote IT Assistance</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;