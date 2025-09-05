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
        <div className="w-full md:h-screen bg-[#EEEEEE] relative overflow-hidden flex flex-col-reverse items-center md:items-start md:flex-row">
            
            <div className="w-[25vw] h-[25vw] bg-[#B7D2EF] rounded-full p-[.2vw] absolute top-[-9vw] right-[-12vw]">
                <div className="w-full h-full rounded-full bg-gradient-to-b to-[#E6EAEE] from-[#E7EBEE]"></div>
            </div>

            <div className="w-[50vw] h-[50vw] bg-[#FFF] rounded-full p-[.2vw] absolute bottom-[-17vw] left-[-17vw]">
                <div className="w-full h-full rounded-full bg-[#EEE]"></div>
            </div>

            <div ref={leftRef} className="w-full md:w-[50%] h-full pt-[10vw] ps-[4vw] z-10">
                <span className="text-[#4A4A4A] text-[4vw] sm:text-[2.2vw] md:text-[1.5vw]">Why Trust Us?</span>
                <h1 className="text-[#4C4886] text-[6vw] sm:text-[4vw] md:text-[2.4vw] font-semibold">Achieve Digital Transformation For Your Retail Business Services</h1>
                <p className="text-[#ABABAB] text-[4vw] sm:text-[2.2vw] md:text-[1.2vw] mt-[3vw] pe-[2vw] font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="w-[90%] my-[5vw] sm:my-[3vw] md:my-0 flex flex-wrap gap-4">
                    <ul className="list-disc text-[#4D4987] px-2 py-[1.6vw] sm:py-[.7vw] font-semibold text-[4.2vw] sm:text-[2vw] md:text-[1.4vw] ps-[7.6vw] sm:ps-[3vw] md:ps-[2.5vw] w-full sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987]"><li>Protect Your Business</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[1.6vw] sm:py-[.7vw] font-semibold text-[4.2vw] sm:text-[2vw] md:text-[1.4vw] ps-[7.6vw] sm:ps-[3vw] md:ps-[2.5vw] w-full sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987]"><li>Network Security</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[1.6vw] sm:py-[.7vw] font-semibold text-[4.2vw] sm:text-[2vw] md:text-[1.4vw] ps-[7.6vw] sm:ps-[3vw] md:ps-[2.5vw] w-full sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987]"><li>Data Security</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[1.6vw] sm:py-[.7vw] font-semibold text-[4.2vw] sm:text-[2vw] md:text-[1.4vw] ps-[7.6vw] sm:ps-[3vw] md:ps-[2.5vw] w-full sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987]"><li>Small Business Owners</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[1.6vw] sm:py-[.7vw] font-semibold text-[4.2vw] sm:text-[2vw] md:text-[1.4vw] ps-[7.6vw] sm:ps-[3vw] md:ps-[2.5vw] w-full sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987]"><li>Running Your Business</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[1.6vw] sm:py-[.7vw] font-semibold text-[4.2vw] sm:text-[2vw] md:text-[1.4vw] ps-[7.6vw] sm:ps-[3vw] md:ps-[2.5vw] w-full sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987]"><li>Network Monitoring</li></ul>
                </div>
            </div>
            <div ref={rightRef} className="w-full sm:w-[80%] md:w-[50%] h-full">
                <img src="/img/ServicesDetailPage/image.png" className="w-[80%] md:mt-[10vw] mx-auto md:ms-[4vw]" />
            </div>

        </div>
    );
};

export default SectionFour;