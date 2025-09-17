'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const SectionOne = () => {
  // 1. states/hooks variables
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP context for React safety
    let ctx = gsap.context(() => {
      // timeline with small delay to wait for loader (0.6s)
      const tl = gsap.timeline({ delay: 0.6 });

      tl.from(".animate-text", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  // 2. return statement/jsx
  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-[80vw] sm:w-[50vw] h-[30vh] mx-auto sm:mx-0
        flex flex-col items-center sm:items-start sm:ps-8 md:ps-23 text-white"
      >
        <button className="cursor-pointer animate-text bg-white z-5 px-5 sm:px-8 sm:text-[2.5vw] py-2 rounded text-[#4C4886] font-bold">
          CONNECTING
        </button>
        <h1 className="animate-text font-bold z-10 text-[10vw] sm:text-[8vw] md:text-[6.4vw] mt-3 md:mt-0">
          BRANDS
        </h1>
        <span className="animate-text z-5 sm:text-[4vw] md:text-[3vw]">WITH</span>
        <h4 className="animate-text font-bold z-1000 text-[7vw] sm:text-[3.5vw] md:text-[3.5vw]">
          GLOBAL AUDIENCES
        </h4>
        <Link href="/contactus" className='z-5'>
          <button className="cursor-pointer animate-text bg-white px-5 py-2 rounded text-[#4C4886] text-[5vw] sm:text-[2.4vw] md:text-[2vw] mt-5 font-bold">
            TALK TO OUR EXPERT
          </button>
        </Link>
        
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animationPlayState: isHovered ? 'paused' : 'running',
            WebkitAnimationPlayState: isHovered ? 'paused' : 'running', // Safari support
          }}
        className="w-[100%] images p-10 sm:p-0 overflow-hidden md:p-5 flex gap-4 sm:w-[50%] h-[85%] md:h-[100%] absolute sm:right-4 md:right-14 top-[15%] md:top-[20%]">
          <div className='first-column absolute top-[-18vw] left-[2.6vw] sm:left-0 w-[30%] h-[100%]'>
            {/* BOX ONE */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

            {/* BOX TWO */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

            {/* BOX THREE */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

          </div>
          <div className='second-column absolute top-[-18vw] left-[35vw] sm:left-[16vw] w-[30%] h-[100%]'>
            {/* BOX ONE */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

            {/* BOX TWO */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

            {/* BOX THREE */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

          </div>
          <div className='third-column absolute top-[-18vw] right-[2.6vw] w-[30%] h-[100%]'>
            {/* BOX ONE */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1569323112685-9c1410e5a0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

            {/* BOX TWO */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

            {/* BOX THREE */}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
              }}
              className="w-full h-[48%] bg-[#70BEEA] p-3 ps-0 pb-0 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1486486955648-a4f22566c598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shape Image"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 91%)",
                }}
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionOne;
