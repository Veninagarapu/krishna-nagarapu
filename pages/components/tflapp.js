import React from "react";
import tflimg from "../../public/tfl.png";
import Image from "next/image";
function TFLProject() {
  return (
    <div className="project group mb-3 sm:mb-8 last:mb-0">
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <a href="https://github.com/Veninagarapu/Transport-for-London-App" target="_blank" rel="noreferrer">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">London Transport Site</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            Created a multipage mobile-first React app which utilizes the TFL Unified API and allows users to plan their journey and view live locations of stations using Google Maps.
          </p>
          {/* <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            Added a visual depiction of the user's journey, showing a line from one station to the next in the color of the corresponding train line. Used React hooks and React Router for navigation. Implemented Bootstrap and Figma for a user-friendly front end.
          </p> */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li>
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li>
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">React</li>
          </ul>
          {/* <div className="link-buttons-container mt-4">
            <button className="portfolio-link">
              <a href="https://storied-rabanadas-de7a71.netlify.app/" target="_blank" rel="noreferrer">Live site</a>
            </button>
            <button className="portfolio-link">
              <a href="https://github.com/Veninagarapu/Transport-for-London-App" target="_blank" rel="noreferrer">Github Repository</a>
            </button>
          </div> */}
        </div>
      </a>
      <Image
        alt="London Transport Site Preview"
        loading="lazy"
        width="1324"
        height="655"
        decoding="async"
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        style={{ color: 'transparent' }}
        src="./tfl.png" // Use your image source here
      />
    </section>
  </div>
  
  )
}

export default TFLProject
