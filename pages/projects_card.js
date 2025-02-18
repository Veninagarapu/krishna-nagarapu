 
// import { useState, useEffect } from "react";
// import Image from "next/image";

// const ProjectsCard = () => {
//  // Handle scroll events to update the scaling and opacity based on scroll position
//  const handleScroll = () => {
//     // Get all elements with the className 'project'
//     const projectDivs = document.querySelectorAll(".project");

//     projectDivs.forEach((div) => {
//       const divPosition = div.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       // If the div is in the viewport, apply scaling and opacity changes
//       if (divPosition < windowHeight && divPosition > 0) {
//         const scale = Math.min(1, Math.max(0.8, 0.8 + (windowHeight - divPosition) / 500));
//         const opacity = Math.min(0.673778, Math.max(0.6, (windowHeight - divPosition) / 400));

//         // Apply the style to each div
//         div.style.opacity = opacity;
//         div.style.transform = `scale(${scale}) translateZ(0px)`;
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>



//       <div className="project group mb-3 sm:mb-8 last:mb-0"><section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"><a href="https://mot.dallatorre.dev/"><div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"><h3 className="text-2xl font-semibold">MOT</h3><p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">Development of a web system with integration to the MOT API to identify car license plates, check MOT status.</p><ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto"><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">PHP</li><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">MOT API</li></ul></div></a><Image alt="Project I worked on" loading="lazy" width="1324" height="655" decoding="async" data-nimg="1" className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:right-[initial] group-even:-left-40" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmot.2b5bc7d0.png&amp;w=1920&amp;q=95 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmot.2b5bc7d0.png&amp;w=3840&amp;q=95 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmot.2b5bc7d0.png&amp;w=3840&amp;q=95"/></section></div>
      
//       <div  className="project group mb-3 sm:mb-8 last:mb-0"><section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"><a href="https://github.com/edudallatorre/spring-boot-project"><div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"><h3 className="text-2xl font-semibold">Spring Boot</h3><p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">Developing a Spring Boot project to gain a deeper understanding of its functionality.</p><ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto"><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Java</li><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Spring Boot</li><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Docker</li><li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">PostgreSQL</li></ul></div></a><Image alt="Project I worked on" loading="lazy" width="1350" height="764" decoding="async" data-nimg="1" className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:right-[initial] group-even:-left-40" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspringboot.d9297266.png&amp;w=1920&amp;q=95 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspringboot.d9297266.png&amp;w=3840&amp;q=95 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspringboot.d9297266.png&amp;w=3840&amp;q=95"/></section></div>
    
//     </div>
//   );
// };

// export default ProjectsCard;



import { useState, useEffect } from "react";
import Image from "next/image";

const ProjectsCard = () => {
  const handleScroll = () => {
    const projectDivs = document.querySelectorAll(".project");
    const windowHeight = window.innerHeight;

    projectDivs.forEach((div) => {
      const divPosition = div.getBoundingClientRect().top;
      const divHeight = div.offsetHeight;

      // Calculate scale factor: start scaling when top of the card reaches bottom of the screen
      // and scale it until it is fully visible.
      if (divPosition + divHeight > 0 && divPosition < windowHeight) {
        const scaleStart = windowHeight - divHeight; // When the top reaches bottom
        const scaleEnd = 0; // Fully visible when it's at the bottom of the viewport
        const scaleRange = scaleStart - divPosition; // Range of scaling

        // Gradual scaling: make it smoother by increasing the range over which scaling happens
        const scale = Math.min(1, Math.max(0.8, 0.8 + (scaleRange / (divHeight * 0.75)))); // Reduced scaling multiplier for smoother effect

        // Apply the scale and set a smooth transition for transformation
        div.style.transition = "transform 0.5s ease-out"; // Smooth scaling transition
        div.style.transform = `scale(${scale}) translateZ(0)`;
        div.style.opacity = 1; // Keep it fully opaque when visible
      } else {
        // Reset scaling when not in the viewport
        div.style.transform = "scale(0.8)";
        div.style.opacity = 0; // Fade out when out of view
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="project group mb-3 sm:mb-8 last:mb-0">
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <a href="https://mot.dallatorre.dev/">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">MOT</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                Development of a web system with integration to the MOT API to identify car license plates, check MOT status.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">HTML</li>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">CSS</li>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">PHP</li>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">MOT API</li>
              </ul>
            </div>
          </a>
          <Image alt="Project I worked on" loading="lazy" width="1324" height="655" decoding="async" data-nimg="1" className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:right-[initial] group-even:-left-40" style={{ color: 'transparent' }} src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmot.2b5bc7d0.png&amp;w=3840&amp;q=95" />
        </section>
      </div>

      <div className="project group mb-3 sm:mb-8 last:mb-0">
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <a href="https://github.com/edudallatorre/spring-boot-project">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">Spring Boot</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                Developing a Spring Boot project to gain a deeper understanding of its functionality.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Java</li>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Spring Boot</li>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Docker</li>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">PostgreSQL</li>
              </ul>
            </div>
          </a>
          <Image alt="Project I worked on" loading="lazy" width="1350" height="764" decoding="async" data-nimg="1" className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:right-[initial] group-even:-left-40" style={{ color: 'transparent' }} src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspringboot.d9297266.png&amp;w=3840&amp;q=95" />
        </section>
      </div>
    </div>
  );
};

export default ProjectsCard;

