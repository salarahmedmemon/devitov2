import { useState } from "react";

const questions = [
  {
    title: "Why SEO Is Important For All Business",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "How to Build an Effective Website",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Best Practices for Marketing",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const SectionThree = () => {
  const [clicked, setClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full min-h-[105vh] bg-[#0A131C]">
      {/* Header */}
      <h1 className="text-[#4C4886] pt-[6vw] text-center font-semibold text-[2vw]">
        A Frequently Asked Question
      </h1>
      <p className="text-center text-[#656565] pt-[1vw]">
        Quick answers to questions you may have about untitled UI and billing.
      </p>

      {/* Search */}
      <div className="relative w-fit mx-auto">
        <input
          type="text"
          placeholder="Search"
          className="bg-white py-[.5vw] mt-[1.5vw] rounded-lg w-[28vw] text-gray-500 text-[1.3vw] ps-[3.4vw]"
        />
        <img
          src="/img/FAQ/image04.png"
          className="absolute top-[2.3vw] left-[1vw] w-[1.5vw]"
        />
      </div>

      {/* Category buttons */}
      <div className="mx-auto w-fit mt-[4vw] text-[#848688] text-[1.5vw] flex gap-[1vw]">
        <button className="bg-transparent font-semibold border-1 px-2 rounded border-[#3D3C6D] text-[#3D3C6D]">
          General
        </button>
        <button>Build</button>
        <button>Promote</button>
        <button>Manage</button>
        <button>Integration</button>
        <button>Legal</button>
      </div>

      <hr className="text-[#828484] mt-[1vw] w-[90vw] mx-auto" />

      <h2 className="text-[#4A4682] ps-[4.4vw] pt-[.7vw] font-semibold text-[1.8vw]">
        General Questions
      </h2>

      {/* Conditional Rendering */}
      {!clicked ? (
        <div className="w-[90vw] mx-auto mt-[2vw] flex flex-wrap items-center justify-center gap-4">
          {questions.map((q, i) => (
            <div
              key={i}
              onClick={() => {
                setClicked(true);
                setActiveIndex(i);
              }}
              className="w-full h-[10vh] border-1 border-gray-300 rounded-lg relative cursor-pointer"
            >
              <img
                src="/img/FAQ/arrow.png"
                className="absolute w-[3vw] right-[1vw] top-[.7vw]"
              />
              {/* <h3 className="ps-[1vw] pt-[2vw] text-white">{q.title}</h3> */}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[90vw] mx-auto mt-[2vw] flex gap-4">
          {/* Left Column */}
          <div className="w-[48%] h-full flex flex-col gap-6">
            {questions.map((q, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full h-[10vh] flex items-center justify-between px-[1vw] cursor-pointer rounded-lg ${
                  activeIndex === i
                    ? "bg-[#4C4886] text-white"
                    : "border-1 border-gray-200 text-black"
                }`}
              >
                {activeIndex === i && (
                <>
                  <h2 className="font-semibold text-[1.3vw]">{q.title}</h2>
                  <img src="/img/FAQ/whitearrow.png" className="w-[4vw]" />
                </>
                )}
              </div>
            ))}
          </div>

          <div className="w-[.1vw] h-[18vw] bg-[#282D50]"></div>

          {/* Right Column */}
          <div className="w-[48%] h-full">
            <h3 className="text-[#4A4783] font-semibold text-[1.6vw]">
              {questions[activeIndex].title}
            </h3>
            <p className="text-[#56585A] text-[1vw] mt-[1vw]">
              {questions[activeIndex].content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionThree;
