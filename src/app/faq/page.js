'use client';
import { useEffect, useRef, useState } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Footer from "../components/Footer";

export default function CaseStudiesPage() {
    // 1. states/hook variables
    const detailsPage = useRef(null);
    const [isLoaded, setIsLoaded] = useState(true);

    // loader timeout
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoaded(false);
        }, 1500); // 1.5s for smoother transition
        return () => clearTimeout(timer);
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <>
            {
                isLoaded ? (
                     // loader
                    <div className="w-full h-[75vh] md:h-screen bg-blue-950 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold animate-pulse">Loading...</h1>
                    </div>
                ) : (
                    <div ref={detailsPage}>
                        <SectionOne />
                        <SectionTwo />
                        <SectionThree />
                        <Footer />
                    </div>
                )
            }
        </>
    );
}