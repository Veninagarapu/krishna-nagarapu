import React from "react";
import urban from "../Images/urban.jpg";
import Image from "next/image";

function Urban() {
  return (
    <div className="project group mb-3 sm:mb-8 last:mb-0">
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <a href="https://comforting-crepe-e83098.netlify.app/" target="_blank" rel="noreferrer">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">Urban Fashion Home Page</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            This is a Home page built using HTML and CSS. The project helped me to revisit the basics of CSS.
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li>
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li>
          </ul>
        </div>
      </a>
      <Image
        alt="Urban Fashion Home Page Preview"
        loading="lazy"
        width="1324"
        height="655"
        decoding="async"
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        style={{ color: 'transparent' }}
        src={urban} // Use your image source here
      />
    </section>
  </div>
  
  )
}

export default Urban