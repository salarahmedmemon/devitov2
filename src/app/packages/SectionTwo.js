"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
    // 1. states/hook variables
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

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[105vh] sm:h-[120vh] md:h-[110vh] bg-[#EEEEEE] relative overflow-hidden">
            <div className="hidden sm:block w-[40vw] h-[40vw] bg-white rounded-full p-1 absolute bottom-[-13vw] left-[-8vw]">
                <div className="w-full h-full bg-[#EEEEEE] rounded-full"></div>
            </div>
            <div className="hidden sm:block w-[25vw] h-[25vw] rounded-full bg-[#C0D6EF] p-[.2vw] absolute top-4 right-[-12vw]">
                <div className="w-full h-full rounded-full bg-[#E3E8EE]"></div>
            </div>
            <div ref={topRef} className="text-center text-[6vw] sm:text-[3vw] md:text-[2.3vw] pt-[4vw]">
                <h1 className="text-[#333333] mx-auto w-[70%] sm:w-[35%] md:w-[25%] border-t-[.4vw] md:border-t-[.2vw] border-[#4C4886] font-semibold">PACKAGES We Offering</h1>
                <h2 className="text-[#4C4886] text-[8vw] sm:text-[3.4vw] md:text-[2.8vw] font-bold">Certified Excellence</h2>
            </div>

            <div className="w-full h-[76vh] mt-[1vw] flex flex-col md:flex-row items-center justify-center">
                <div ref={leftRef} className="w-full md:w-[50%] h-full flex items-center justify-center z-1000">
                    <img src="/img/Packages/image1.png" className="w-[70vw] sm:w-[50vw] md:w-[35vw] pt-[60vw] sm:pt-[35vw] md:pt-0" />
                </div>
                <div ref={rightRef} className="w-full md:w-[50%] h-full pt-[4vw] z-1000">
                    <h1 className="text-[6vw] sm:text-[3vw] md:text-[2vw] w-[70vw] sm:w-[33vw] md:w-[25vw] text-center md:text-start mt-[2vw] md:mt-0 border-l-2 ms-[3vw] md:ms-0 md:ps-2 border-[#6E6E6E]">DISCOVERY PACKAGES</h1>
                    <p className="text-[#8c8a8a] p-[3vw] pt-[0vw] md:pb-2 md:pe-[9vw] mt-[2vw] sm:mt-[1vw] text-[4vw] sm:text-[2vw] md:text-[1vw] md:ps-0">
                        We are an IT outsourcing company in Dubai offering 
                        an extended range of services including End User Support,
                        Application investment, Cloud &amp; Infrastructure expertise.
                        Our on-demand IT staff outsourcing solution in Dubai specializes
                        exclusively for digital transformation wth custom Software Development,
                        Software Testing &amp; QA, Cloud Computing, Mobile &amp; 
                        Web Development, Maintenance &amp; Support Blockchain Consulting, Data Science.
                    </p>
                    <p className="text-[4vw] sm:text-[2vw] md:text-[1vw] mt-[2vw] sm:mt-[1vw] md:mt-0 text-[#5B5890] ps-[3vw] md:ps-0 font-semibold">Cost-effective and Comprehensive IT Outsourcing Services:</p>
                    <div className="w-full mt-[3vw] sm:mt-[4vw] md:mt-[1vw] flex flex-col sm:flex-row gap-0 sm:gap-8 p-[4vw] pt-[0vw] md:p-0 md:pe-[2vw]">
                        <div className="w-full sm:w-[30%] h-full">
                            <h3 className="text-[#5B5890] font-semibold">Basic</h3>
                            <ul className="list-disc ps-[4vw] sm:ps-3 md:ps-[1vw] text-[4vw] sm:text-[2vw] md:text-[0.9vw] text-[#6C6C6C]">
                                <li>Essential IT Support</li>
                                <li>Basic Security &amp; Monitoring</li>
                                <li>Limited Cloud Storage</li>
                                <li>24/7 Email Support</li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-[30%] h-full">
                            <h3 className="text-[#5B5890] font-semibold">MenaJobs.io</h3>
                            <ul className="list-disc text-[4vw] sm:text-[2vw] md:text-[0.9vw] ps-[4vw] sm:ps-3 text-[#6C6C6C]">
                                <li>Advanced IT Support &amp; Maintenance</li>
                                <li>Enhance Security &amp; Threat</li>
                                <li>Increased Cloud Storage</li>
                                <li>24/7 Email Support</li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-[30%] h-full">
                            <h3 className="text-[#5B5890] font-semibold">Premium Plan</h3>
                            <ul className="list-disc text-[4vw] ps-[4vw] sm:ps-3 sm:text-[2vw] md:text-[0.9vw] text-[#6C6C6C]">
                                <li>Fully Managed IT Services</li>
                                <li>Enterprise Level Security &amp; Backups</li>
                                <li>Unlimited Cloud Storage &amp; Backups</li>
                                <li>24/7 Priority Support (Phone, Chat, Email)</li>
                            </ul>
                        </div>
                    </div>

                    <button className="cursor-pointer animate-text bg-[#4C4886] z-5 px-3 py-1 rounded text-white ms-[3vw] md:ms-0 text-[4vw] sm:text-[2vw] md:text-[1.2vw] font-semibold">
                        TALK TO OUR EXPERT
                        </button>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;