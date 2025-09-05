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
        <div className="w-full h-[127vh] sm:h-[105vh] md:h-[105vh] bg-[#EEEEEE] relative overflow-hidden">
            <div className="hidden sm:block w-[40vw] h-[40vw] bg-white rounded-full p-1 absolute bottom-[-13vw] left-[-8vw]">
                <div className="w-full h-full bg-[#EEEEEE] rounded-full"></div>
            </div>
            <div className="hidden sm:block w-[25vw] h-[25vw] rounded-full bg-[#C0D6EF] p-[.2vw] absolute top-4 right-[-12vw]">
                <div className="w-full h-full rounded-full bg-[#E3E8EE]"></div>
            </div>
            <div ref={topRef} className="text-center text-[6vw] sm:text-[3vw] md:text-[2.3vw] pt-[4vw]">
                <h1 className="text-[#333333] mx-auto w-[45%] sm:w-[20%] md:w-[15%] border-t-[.4vw] md:border-t-[.2vw] border-[#4C4886] font-semibold">Our Careers</h1>
                <h2 className="text-[#4C4886] text-[5vw] sm:text-[2.8vw] md:text-[2.4vw] font-bold">Blog</h2>
            </div>

            <div className="w-full h-[76vh] mt-[1vw] flex flex-col md:flex-row items-center justify-center">
                <div ref={leftRef} className="w-full md:w-[50%] h-full flex items-center justify-center z-1000">
                    <img src="/img/CareersPage/image04.png" className="w-[70vw] sm:w-[50vw] md:w-[25vw] pt-[60vw] sm:pt-[50vw] md:pt-0" />
                </div>
                <div ref={rightRef} className="w-full md:w-[50%] h-full pt-[4vw] z-1000">
                    <h1 className="text-[#4C4886] font-semibold text-[6vw] sm:text-[3vw] md:text-[2vw] mx-auto md:mx-0 w-[30vw] sm:w-[20vw] mt-[2vw] md:mt-0 border-l-2 ps-2 border-[#6E6E6E]">Our Blog</h1>
                    <p className="text-[#ABABAB] p-[3vw] pt-[0vw] md:pe-[9vw] mt-[2vw] sm:mt-[1vw] text-center md:text-start md:ps-0">Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                        When an unknown printer took a gallery of type and scrambled it to make a type 
                        specimen book.It has survived not only five centuries. 
                    </p>
                    <p className="mt-[2vw] sm:mt-[1vw] md:mt-0 text-[#5B5890] text-center md:text-start font-semibold">Cost-effective and Comprehensive IT Outsourcing Services:</p>
                    <div className="w-full h-[45vh] mt-[3vw] sm:mt-[2vw] md:mt-[1vw] flex flex-col sm:flex-row gap-8 p-[4vw] pt-[0vw] md:p-0 md:pe-[2vw]">
                        <div className="w-full sm:w-[30%] h-full">
                            <h3 className="text-[#5B5890] font-semibold">Alsthetic</h3>
                            <p className="text-[#AEAEAE]">Strategically developed an AI-Powered Platform generating text, 
                                images, audio, code and videos. With a focus on precision.
                            </p>
                        </div>
                        <div className="w-full sm:w-[30%] h-full">
                            <h3 className="text-[#5B5890] font-semibold">MenaJobs.io</h3>
                            <p className="text-[#AEAEAE]">We led more MenaJobs.io's development 
                                shopping it into a user-friendly job portal. Our work spanned planning 
                                design coding and optimization.
                            </p>
                        </div>
                        <div className="w-full sm:w-[30%] h-full">
                            <h3 className="text-[#5B5890] font-semibold">APK-Hub</h3>
                            <p className="text-[#AEAEAE]">As the developer of PK-Hub we crafted a 
                                user-friendly platform for discovering and exploring apps and games from 
                                the play store my work spans design. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;