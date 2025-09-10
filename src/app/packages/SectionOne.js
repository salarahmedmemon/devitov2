import Header from "../components/Header";

const SectionOne = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full md:h-screen packages">
            <Header />

            <div className="w-full md:h-screen pt-20 md:pt-26 relative overflow-hidden">
              <img
                src="/img/ServicesPage/SectionOne/image02.png"
                className="img-top hidden md:block absolute top-[5vw] left-[34vw] h-[16vw]"
              />
              <img
                src="/img/ServicesPage/SectionOne/image03.png"
                className="img-left-bottom hidden md:block absolute top-[9.5vw] right-[33vw] rotate-30 w-[5vw]"
              />
              <div className="w-full h-[65vh] md:h-[83vh] flex flex-col-reverse md:flex-row items-center justify-center md:gap-10 md:ps-25.5 md:pe-25.5 mb-[3vw] sm:mb-[2vw] md:mb-0">
                <div className="text-container w-[50vw] sm:w-[90%] md:w-[50%] h-full flex flex-col items-center md:items-start justify-center">
                  <button className="px-6 py-2 bg-white text-[#4C4886] text-[5vw] sm:text-[2.5vw] md:text-[2.5vw] font-bold rounded-lg mt-2 md:mt-10">
                    Flexible IT
                  </button>
                  <h1 className="text-white font-bold text-[15vw] sm:text-[7vw] md:text-[6.5vw] sm:leading-[10vw] md:leading-[7vw]">
                    SOLUTION
                  </h1>
                  <h2 className="text-white text-[5vw] sm:text-[3.4vw] md:text-[3.4vw] mb-4 sm:mb-0 leading-0 sm:leading-[3vw] md:leading-[4vw]">FOR ALL BUSINESSES</h2>
                  <p className="text-white text-[4vw] sm:text-[2vw] md:text-[1vw] w-[90vw] sm:w-[100%] md:w-[110%] text-center md:text-start mt-[1vw]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   
                  </p>
                  <button className="px-4 sm:px-6 py-2 bg-white text-[#4C4886] text-[3.8vw] sm:text-[2.4vw] md:text-[1.2vw] font-bold rounded mt-4 md:mt-10">
                    VIEW ALL SERVICES
                  </button>
                </div>
                <div className="main-img-container w-[70vw] sm:w-[44vw] md:w-[50%] h-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/img/Packages/image.png"
                  />
                </div>
              </div>
            </div>
        </div>
    );
};

export default SectionOne;