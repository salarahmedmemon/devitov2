import Header from "./Header";
import SectionOne from "./SectionOne";

const Main = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="w-full h-[48.5vh] md:h-screen relative">
            <Header />
            
            <div className="w-full pt-[25vw] sm:pt-[14vw]">
                <SectionOne />
            </div>
        </div>
    );
};

export default Main;