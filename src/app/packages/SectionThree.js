"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
    // 1. states/hook variables
    const topRef = useRef(null);
    const leftRef = useRef(null);

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
        
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full bg-[#0A131C] pt-[7vw] p-[4vw]">
            <div className="w-full h-full gradient-border p-[.3vw] sm:p-[.2vw] md:p-[.1vw] rounded-lg">
                <div className="w-full sm:h-[110vh] md:h-full bg-[#0A131C] rounded-lg pt-[5vw]">
                    <div ref={topRef} className="text-center text-white text-[6vw] sm:text-[2.8vw] w-[40vw] sm:w-[15vw] mx-auto border-t-1 sm:border-t-2 border-[#6CBADD]">
                        <h1>See Our</h1>
                    </div>
                    <h2 className="text-[#6CBADD] text-[5vw] sm:text-[3vw] md:text-[2.5vw] font-semibold text-center">Service Package</h2>
                    
                    {/* SHOWCASE BLOGS */}
                    <div ref={leftRef} className="w-full h-full m-[1vw] md:m-0 pt-[4vw] md:pt-12 sm:mt-[0vw] flex items-center justify-center flex-wrap gap-4 md:gap-2 pb-5 sm:pb-20 md:pb-10">

                        {/* BLOG ONE */}
                        <div className="w-[90%] sm:w-[40%] md:w-[24%] md:h-[68vh] gradient-border rounded-[1vw] p-[.3vw] sm:p-[.2vw] md:p-[.1vw]">
                            <div className="w-full text-white h-full bg-[#0A131C] rounded-[1vw] p-2">
                                <h3 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">COURSE</h3>
                                <h4 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">GRAPHIC/DESIGNING</h4>
                                <div className="w-full ms-[0.5vw] mt-[2vw]">
                                    <div className="w-full flex items-center gap-4">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Logo Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">FB Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Brouchers Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">CD / Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Photos Editing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Web Header</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Sliders</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-white rounded-full"></div>
                                        <span className="text-[3.4vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Branding Promotions</span>
                                    </div>

                                    <button className="px-2 sm:px-4 sm:py-1 rounded mt-4 sm:mt-6 bg-white text-[#6D5BBE]">Join Now</button>
                                </div>
                            </div>
                        </div>

                        {/* BLOG TWO */}
                        <div className="w-[90%] sm:w-[40%] md:w-[24%] md:h-[68vh] gradient-border rounded-[1vw] p-[.3vw] sm:p-[.2vw] md:p-[.1vw]">
                            <div className="w-full text-white h-full bg-[#0A131C] rounded-[1vw] p-2">
                                <h3 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">COURSE</h3>
                                <h4 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">MOBILE / DEVELOPMENT</h4>
                                <div className="w-full ms-[0.5vw] mt-[2vw]">
                                    <div className="w-full flex items-center gap-4">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Logo Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">FB Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Brouchers Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">CD / Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Photos Editing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Web Header</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Sliders</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-white rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Branding Promotions</span>
                                    </div>

                                    <button className="px-2 sm:px-4 sm:py-1 rounded mt-6 bg-white text-[#6D5BBE]">Join Now</button>
                                </div>
                            </div>
                        </div>

                        {/* BLOG THREE */}
                        <div className="w-[90%] sm:w-[40%] md:w-[24%] md:h-[68vh] gradient-border rounded-[1vw] p-[.3vw] sm:p-[.2vw] md:p-[.1vw]">
                            <div className="w-full text-white h-full bg-[#0A131C] rounded-[1vw] p-2">
                                <h3 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">COURSE</h3>
                                <h4 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">UI / UX DESIGNING</h4>
                                <div className="w-full ms-[0.5vw] mt-[2vw]">
                                    <div className="w-full flex items-center gap-4">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Logo Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">FB Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Brouchers Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">CD / Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Photos Editing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Web Header</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Sliders</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-white rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Branding Promotions</span>
                                    </div>

                                    <button className="px-2 sm:px-4 sm:py-1 rounded mt-6 bg-white text-[#6D5BBE]">Join Now</button>
                                </div>
                            </div>
                        </div>

                        {/* BLOG FOUR */}
                        <div className="w-[90%] sm:w-[40%] md:w-[24%] md:h-[68vh] gradient-border rounded-[1vw] p-[.3vw] sm:p-[.2vw] md:p-[.1vw]">
                            <div className="w-full text-white h-full bg-[#0A131C] rounded-[1vw] p-2">
                                <h3 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">COURSE</h3>
                                <h4 className="text-center text-[4vw] sm:text-[2.5vw] md:text-[1.6vw] font-semibold">WEB DEVELOPMENT</h4>
                                <div className="w-full ms-[0.5vw] mt-[2vw]">
                                    <div className="w-full flex items-center gap-4">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Logo Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">FB Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Brouchers Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">CD / Cover Designing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Photos Editing</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Web Header</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-[#D9D9D9] rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Sliders</span>
                                    </div>

                                    <div className="w-full flex items-center gap-4 mt-2">
                                        <div className="w-[1vw] h-[1vw] bg-white rounded-full"></div>
                                        <span className="text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] text-[#D9D9D9]">Branding Promotions</span>
                                    </div>

                                    <button className="px-2 sm:px-4 sm:py-1 rounded mt-6 bg-white text-[#6D5BBE]">Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;