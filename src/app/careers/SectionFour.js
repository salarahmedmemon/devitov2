const SectionFour = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[127vh] sm:h-[105vh] md:h-screen bg-[#EEEEEE] relative overflow-hidden">
            <div className="hidden sm:block w-[40vw] h-[40vw] bg-white rounded-full p-1 absolute bottom-[-13vw] left-[-8vw]">
                <div className="w-full h-full bg-[#EEEEEE] rounded-full"></div>
            </div>
            <div className="hidden sm:block w-[25vw] h-[25vw] rounded-full bg-[#C0D6EF] p-[.2vw] absolute top-4 right-[-12vw]">
                <div className="w-full h-full rounded-full bg-[#E3E8EE]"></div>
            </div>

            <div className="w-full h-full mt-[1vw] flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-[50%] h-full flex items-center justify-center z-1000">
                    <img src="/img/CareersPage/image04.png" className="w-[70vw] sm:w-[50vw] md:w-[25vw] pt-[60vw] sm:pt-[50vw] md:pt-0" />
                </div>
                <div className="w-full md:w-[50%] h-full pt-[8vw] me-[8vw] z-1000">
                    <p className="text-[1.6vw] text-[#525252]">Why Choose Us?</p>
                    <h1 className="text-[#4C4886] font-semibold text-[2.6vw]">Safegaurd Your Brand With Cyber Security And IT Solutions</h1>
                    <div className="w-[50vw] h-[20vh] mt-[2vw] flex flex-wrap items-center gap-4">
                        <div className="w-[35%] py-2 rounded border-l-2 border-[#4C4886] flex items-center justify-center bg-white text-[#4C4886]">
                            <ul className="list-disc font-semibold"><li>Remote IT Assistance</li></ul>
                        </div>

                        <div className="w-[35%] py-2 rounded border-l-2 border-[#4C4886] flex items-center justify-center bg-white text-[#4C4886]">
                            <ul className="list-disc font-semibold"><li>Cloud Services</li></ul>
                        </div>

                        <div className="w-[35%] py-2 rounded border-l-2 border-[#4C4886] flex items-center justify-center bg-white text-[#4C4886]">
                            <ul className="list-disc font-semibold"><li>Managed IT Service</li></ul>
                        </div>

                        <div className="w-[35%] py-2 rounded border-l-2 border-[#4C4886] flex items-center justify-center bg-white text-[#4C4886]">
                            <ul className="list-disc font-semibold"><li>Remote IT Assistance</li></ul>
                        </div>

                        <div className="w-[35%] py-2 rounded border-l-2 border-[#4C4886] flex items-center justify-center bg-white text-[#4C4886]">
                            <ul className="list-disc font-semibold"><li>Practice IT Management</li></ul>
                        </div>

                        <div className="w-[35%] py-2 rounded border-l-2 border-[#4C4886] flex items-center justify-center bg-white text-[#4C4886]">
                            <ul className="list-disc font-semibold"><li>Remote IT Assistance</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;