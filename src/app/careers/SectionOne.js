"use client";
import Header from "../components/Header";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SectionOne = () => {
    // 1. states/hook variables
    const astroRef = useRef(null);
    const missileRef = useRef(null);
    const textRef = useRef(null);
    const mainImgRef = useRef(null);

    useEffect(() => {
        // Astronaut (top → center)
        if (astroRef.current) {
            gsap.fromTo(
                astroRef.current,
                { y: -200, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
            );
        }

        // Missile (bottom-left → position)
        if (missileRef.current) {
            gsap.fromTo(
                missileRef.current,
                { x: -200, y: 200, opacity: 0 },
                { x: 0, y: 0, opacity: 1, duration: 1.8, ease: "power3.out", delay: 0.3 }
            );
        }

        // Text (from left)
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { x: -300, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
            );
        }

        // Main image (from right)
        if (mainImgRef.current) {
            gsap.fromTo(
                mainImgRef.current,
                { x: 300, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.7 }
            );
        }
    }, []);


    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="CareersPage w-full h-[55vh] sm:h-[85vh] md:min-h-screen">
            <Header />
            <div className="w-full h-full pt-[7.7vw] relative">
                <img ref={astroRef} src="/img/ServicesPage/SectionOne/image02.png" className="hidden md:block astronaut w-[12vw] absolute top-[5vw] right-[64vw]" />
                <img ref={missileRef} src="/img/AboutPage/MainPageImages/image03.png" className="hidden md:block missile w-[5vw] absolute top-[8vw] right-[37vw] rotate-[24deg]" />

                <div className="w-full h-[95%] flex flex-col-reverse md:flex-row items-center justify-center">
                    <div ref={textRef} className="w-full md:w-[60%] h-[100%] p-[7.2vw] pt-[2vw] text-center md:text-start md:pt-[8vw]">
                        <button className="bg-white px-2 py-1 text-[#4C4886] text-[6vw] sm:text-[4vw] md:text-[3vw] font-semibold rounded-[.6vw]">SEE OUR</button>
                        <h1 className="text-white text-[10vw] sm:text-[8vw] md:text-[6vw] leading-[11vw] sm:leading-[8vw] md:leading-[6.5vw] font-bold">CAREERS BLOG</h1>
                        <p className="text-white text-[4vw] sm:text-[2vw] md:text-[1.2vw] text-center md:text-start p-[6vw] md:pb-[2vw] md:ps-0 pt-2 md:pe-[14vw]">Lorem Ipsum is simply dummy text of the printing and typsetting industry. 
                            Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <button className="bg-white px-2 py-1 text-[#4C4886] text-[4vw] sm:text-[3vw] md:text-[1.6vw] font-semibold rounded mb-30 sm:mb-26 md:mb-0">Talk to our experts</button>
                    </div>
                    <div ref={mainImgRef} className="w-full md:w-[40%] h-[100%] flex items-center justify-center pt-[65vw] sm:pt-[16vw] md:pt-0 md:pe-[8vw]">
                        <img src="/img/CareersPage/image02.png" className="w-[60vw] sm:w-[50vw] md:w-[30vw]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;