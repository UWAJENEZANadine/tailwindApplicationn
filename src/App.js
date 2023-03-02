import React, { Component } from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Nav />
        </div>
        <div className="data-container">
        <div>
          <div
            id="carouselExampleCaptions"
            className="relative"
            data-te-carousel-init
            data-te-carousel-slide
          >
            <div
              className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators
            >
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="add-data relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active
                data-te-carousel-item
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div
                className="add-data relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div
                className="add-data relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
        <div className="second-div">
          <div className="flex items-center flex justify-center items-center py-12 px-6">
            <div>
              <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  <h4
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3"
                  >
                    13 things to work on
                  </h4>
                  <p
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm"
                  >
                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                    nesciunt, neque porro quisquam est, quid malum, sensu
                    iudicari, sed ut alterum.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-gray-800">
                    <p
                      tabindex="0"
                      className="focus:outline-none text-sm dark:text-gray-100"
                    >
                      March 28, 2020
                    </p>
                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex justify-center items-center py-12 px-6">
            <div>
              <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  <h4
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3"
                  >
                    13 things to work on
                  </h4>
                  <p
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm"
                  >
                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                    nesciunt, neque porro quisquam est, quid malum, sensu
                    iudicari, sed ut alterum.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-gray-800">
                    <p
                      tabindex="0"
                      className="focus:outline-none text-sm dark:text-gray-100"
                    >
                      March 28, 2020
                    </p>
                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex justify-center items-center py-12 px-6">
            <div>
              <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  <h4
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3"
                  >
                    13 things to work on
                  </h4>
                  <p
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm"
                  >
                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                    nesciunt, neque porro quisquam est, quid malum, sensu
                    iudicari, sed ut alterum.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-gray-800">
                    <p
                      tabindex="0"
                      className="focus:outline-none text-sm dark:text-gray-100"
                    >
                      March 28, 2020
                    </p>
                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div className="flex items-center flex justify-center items-center py-12 px-6">
            <div>
              <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  <h4
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3"
                  >
                    13 things to work on
                  </h4>
                  <p
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm"
                  >
                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                    nesciunt, neque porro quisquam est, quid malum, sensu
                    iudicari, sed ut alterum.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-gray-800">
                    <p
                      tabindex="0"
                      className="focus:outline-none text-sm dark:text-gray-100"
                    >
                      March 28, 2020
                    </p>
                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex justify-center items-center py-12 px-6">
            <div>
              <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  <h4
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3"
                  >
                    13 things to work on
                  </h4>
                  <p
                    tabindex="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm"
                  >
                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                    nesciunt, neque porro quisquam est, quid malum, sensu
                    iudicari, sed ut alterum.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-gray-800">
                    <p
                      tabindex="0"
                      className="focus:outline-none text-sm dark:text-gray-100"
                    >
                      March 28, 2020
                    </p>
                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer />

      </>
    );
  }
}
export default App;
