"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionSix = () => {
    // 1. states/hook variables
    const topRef = useRef(null);
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
        <div className="w-full h-[165vh] sm:h-[118vh] md:h-screen bg-[#EEEEEE] relative overflow-hidden">
            <div className="hidden sm:block w-[40vw] h-[40vw] bg-white rounded-full p-1 absolute bottom-[-13vw] left-[-8vw]">
                <div className="w-full h-full bg-[#EEEEEE] rounded-full"></div>
            </div>
            <div className="hidden sm:block w-[25vw] h-[25vw] rounded-full bg-[#C0D6EF] p-[.2vw] absolute top-4 right-[-12vw]">
                <div className="w-full h-full rounded-full bg-[#E3E8EE]"></div>
            </div>
            <div ref={topRef} className="text-center text-[6vw] sm:text-[3vw] md:text-[2.3vw] pt-[4vw]">
                <h1 className="text-[#333333] mx-auto w-[45%] sm:w-[20%] md:w-[15%] border-t-[.4vw] md:border-t-[.2vw] border-[#4C4886] font-semibold">Our Latest</h1>
                <h2 className="text-[#4C4886] text-[5vw] sm:text-[2.8vw] md:text-[2.4vw] font-bold">Article</h2>
            </div>

            <div ref={rightRef} className="w-full h-[50vh] mt-[4vw] p-[7vw] py-0 flex flex-wrap items-center justify-between gap-4 md:gap-0">
                <div className="w-full sm:w-[48%] md:w-[30%] h-full z-10">
                    <div className="w-full h-[90%] bg-blue-600 rounded-lg">
                        <img src="/img/CareersPage/image14.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-between text-[4vw] sm:text-[2vw] md:text-[1vw] p-4">
                        <ul className="list-disc  text-[#4E4787]"><li>Course</li></ul>
                        <ul className="list-disc  text-[#4E4787]"><li>Free</li></ul>
                        <ul className="list-disc  text-[#4E4787]"><li>Saturday</li></ul>
                    </div>
                </div>

                <div className="w-full sm:w-[48%] md:w-[30%] h-full z-10">
                    <div className="w-full h-[90%] bg-blue-600 rounded-lg">
                        <img src="/img/CareersPage/image15.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-between text-[4vw] sm:text-[2vw] md:text-[1vw] p-4">
                        <ul className="list-disc text-[#4E4787]"><li>Course</li></ul>
                        <ul className="list-disc text-[#4E4787]"><li>Free</li></ul>
                        <ul className="list-disc text-[#4E4787]"><li>Saturday</li></ul>
                    </div>
                </div>
                
                <div className="w-full sm:w-[48%] md:w-[30%] h-full z-10">
                    <div className="w-full h-[90%] bg-blue-600 rounded-lg">
                        <img src="/img/CareersPage/image16.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-between text-[4vw] sm:text-[2vw] md:text-[1vw] p-4">
                        <ul className="list-disc text-[#4E4787]"><li>Course</li></ul>
                        <ul className="list-disc text-[#4E4787]"><li>Free</li></ul>
                        <ul className="list-disc text-[#4E4787]"><li>Saturday</li></ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSix;