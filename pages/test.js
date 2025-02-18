import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { Link } from 'react-scroll';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

 

  const handleSetActive = (to) => {
    setActiveSection(to);
  };


  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Show when scrolled down
    } else {
      setIsScrolled(false); // Hide when at the top
    }
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="__className_a64ecd bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#000000]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#040419]"></div>

        {/* Navigation */}
        <header className="z-[999] relative">
          {isScrolled && (
            <div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[26rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75" 
            style={{ opacity: 1, transform: 'translate3d(-50%, 0, 0)',  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out' }}></div>
          )}
          <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-gray-300">
            <li className="h-3/4 flex items-center justify-center relative">
        <Link
          to="about"
          activeclassName="active"
          smooth={true}
          offset={-200}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('skills')}
          className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
        >
          About
          <span
            className="hidden bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
            style={{
              transform: activeSection === 'about' ? 'translateX(0)' : '',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        </Link>
      </li>

      <li className="h-3/4 flex items-center justify-center relative">
        <Link
          to="projects"
          activeclassName="active"
          smooth={true}
          offset={-200}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('projects')}
          className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
        >
          Projects
          <span
            className="hidden bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
            style={{
              transform: activeSection === 'projects' ? 'translateX(0)' : 'translateX(-100%)',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        </Link>
      </li>
      <li className="h-3/4 flex items-center justify-center relative">
        <Link
          to="skills"
          activeclassName="active"
          smooth={true}
          offset={-200}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('skills')}
          className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
        >
          Skills
          <span
            className="hidden bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
            style={{
              transform: activeSection === 'skills' ? 'translateX(0)' : 'translateX(-100%)',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        </Link>
      </li>
      <li className="h-3/4 flex items-center justify-center relative">
        <Link
          to="experience"
          activeclassName="active"
          smooth={true}
          offset={-200}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('experience')}
          className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
        >
          Experience
          <span
            className="hidden bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
            style={{
              transform: activeSection === 'experience' ? 'translateX(0)' : 'translateX(-100%)',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        </Link>
      </li>
            {/* <li className="nav-item h-3/4 flex items-center justify-center relative group hover:bg-gray-100 dark:hover:bg-purple-900 transition-opacity duration-300 rounded-full">
  <Link 
    to="about"
    activeclassName="active"
    smooth={true}
    offset={-200}
    duration={500}
    spy={true}
    className="nav-link px-3 py-3 text-gray-950 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-300 transition"
  >
    About
  </Link>
</li> */}

{/* <li className="nav-item h-3/4 flex items-center justify-center relative group hover:bg-gray-100 dark:hover:bg-purple-900 transition-opacity duration-300 rounded-full">
  <Link 
    to="projects"
    activeclassName="active"
    smooth={true}
    offset={-50}
    duration={500}
    spy={true}
    className="nav-link px-3 py-3 text-gray-950 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-300 transition"
    // style="transform: none; transform-origin: 50% 50% 0px;"
  >
    Projects
  </Link>
</li> */}

{/* <li className="nav-item h-3/4 flex items-center justify-center relative group hover:bg-gray-100 dark:hover:bg-purple-900 transition-opacity duration-300 rounded-full">
  <Link 
    to="skills"
    activeclassName="active"
    smooth={true}
    offset={-200}
    duration={500}
    spy={true}
    className="nav-link px-3 py-3 text-gray-950 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-300 transition"
  >
    Skills
  </Link>
</li> */}

{/* <li className="nav-item h-3/4 flex items-center justify-center relative group hover:bg-gray-100 dark:hover:bg-purple-900 transition-opacity duration-300 rounded-full">
  <Link 
    to="experience"
    activeclassName="active"
    smooth={true}
    offset={50}
    duration={500}
    spy={true}
    className="nav-link px-3 py-3 text-gray-950 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-300 transition"
  >
    Experience
  </Link>
</li> */}

            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center px-4">
          {/* Hero Section */}
          <section className="flex flex-col items-center px-4"  id="about">
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-20 h-20 relative overflow-hidden mt-6 md:h-20 md:w-20">
                <Image src={deved} layout="fill" objectFit="cover" />
              </div> 
          {/* <div>
            <Image alt="Krishna" fetchpriority="high" width="192" height="192" decoding="async" data-nimg="1" className="h-24 w-24 rounded-full object-cover "  src={deved} layout="fill" objectFit="cover" />
            </div> */}
            <div className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <h2 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"><span className="font-bold sm:text-4xl">Krishna Nagarapu</span>
            <p>I'm a developer passionate about <span className="font-bold">programming.</span></p>
            My background encompasses Web Development & Structural Engineering</h2>
              <div className="flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
  {/* <!-- LinkedIn --> */}
  <a 
    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full 
           focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack 
           dark:bg-white/10 dark:text-white/60" 
    href="https://www.linkedin.com/in/krishna-nagarapu/" 
    target="_blank"
  >
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      stroke-width="0" 
      viewBox="0 0 16 16" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
    </svg>
  </a>

  {/* <!-- GitHub --> */}
  <a 
    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full 
           focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
           transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" 
    href="https://github.com/edudallatorre" 
    target="_blank"
  >
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      stroke-width="0" 
      viewBox="0 0 448 512" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3z"></path>
    </svg>
  </a>

  {/* <!-- CodePen --> */}
  {/* <a 
    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full 
           focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
           transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" 
    href="https://codepen.io/edudallatorre" 
    target="_blank"
  >
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      stroke-width="0" 
      viewBox="0 0 512 512" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
    </svg>
  </a> */}
</div>

              {/* <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image src={deved} layout="fill" objectFit="cover" />
              </div> */}
            </div>


            <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>

{/* About Section */}
<section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
  <h2 className="text-3xl font-medium capitalize mb-8 text-center">ABOUT ME</h2>
  <p className="mb-3">After completing my Master's in Structural Engineering, I decided to follow my passion for programming and enrolled in a web development bootcamp at Bath Spa University. My transition into tech was driven by countless hours of learning, practicing, and 
    refining my coding skills.</p>

<p>I gained valuable experience as a Web Developer at Cavendish Consultancy, contributing to various projects such as developing a survey app in React and managing WordPress-based websites. Prior to this, as a Junior Web Developer at Goodbody Health, I worked with PHP, Laravel, and WordPress to develop and maintain applications for health and wellness services.</p>
 

</section>





          </section>
       

          {/* Projects Section */}
          <section className="scroll-mt-28 mb-28" id="projects">
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">MY PROJECTS</h2>
            <div>
              {/* Project 1: Short Link */}
              <div className="group mb-3 sm:mb-8 last:mb-0">
                <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                  <a href="https://shortlink.dallatorre.dev/">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                      <h3 className="font-medium text-3xl pb-3 text-gray-800 dark:text-gray-50 sm:group-even:text-right">Short Link</h3>
                      <p className="pb-3 text-md text-gray-700 sm:text-lg dark:text-gray-300">A URL shortening service that uses MongoDB and Express for creating short links. Includes features like automatic deletion and link tracking. </p>
                    </div>
                  </a>
                </section>
              </div>

              {/* Project 2: CSS */}
              <div className="group mb-3 sm:mb-8 last:mb-0">
                <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                  <a href="https://theoneliner-css.vercel.app">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                      <h3 className="font-medium text-3xl pb-3 text-gray-800 dark:text-gray-50 sm:group-even:text-right">CSS Mastery</h3>
                      <p className="pb-3 text-md text-gray-700 sm:text-lg dark:text-gray-300">Created a portfolio for demonstrating various CSS skills. Multiple unique animations and design patterns were used. </p>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </section>

          {/* Skills Section */}
        
            <section id="skills" className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
  <h2 className="text-3xl font-medium capitalize mb-8 text-center">
    MY SKILLS
  </h2>
  <ul className="flex icon flex-wrap mt-4 px-4 justify-center gap-2 text-lg text-gray-800"
  style={{opacity: "1", transform: "none"}}>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z">
        </path>
      </svg>
    </li>
    <li className="skill">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z">
        </path>
      </svg>
    </li>
  </ul>
</section>
       

          {/* Experience Section */}
          <section className="scroll-mt-28 mb-28" id="experience">
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">EXPERIENCE</h2>
            <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
  {/* Experience Item 1 */}
  <div className="vertical-timeline-element">
    <span
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        fontSize: '1.5rem',
      }}
      className="vertical-timeline-element-icon bounce-in"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
        padding: '1.3rem 2rem',
      }}
      className="vertical-timeline-element-content bounce-in"
    >
      <div
        style={{
          borderRight: '0.4rem solid rgba(255, 255, 255, 0.5)',
        }}
        className="vertical-timeline-element-content-arrow"
      ></div>
      <h3 className="font-semibold capitalize">Web Developer • Hybrid</h3>
      <p className="font-normal !mt-0">Southampton, UK</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        In my role on a dynamic hospitality platform, I enhance features like delivery methods, invoicing, and ClearAccept payment integration. I use technologies like git, GitHub, DigitalOcean, Rest API, PHP OOP, HTML, CSS, JavaScript, Ajax, MVC, DataTables, DataDog, MariaDB, Cloudflare, and AWS.
      </p>
      <span className="vertical-timeline-element-date"> May 2023 - July 2024</span>
    </div>
  </div>

  {/* Repeat the structure for other experience items... */}

  {/* Example for next Experience Item */}
  <div className="vertical-timeline-element">
    <span
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        fontSize: '1.5rem',
      }}
      className="vertical-timeline-element-icon bounce-in"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
        padding: '1.3rem 2rem',
      }}
      className="vertical-timeline-element-content bounce-in"
    >
      <div
        style={{
          borderRight: '0.4rem solid rgba(255, 255, 255, 0.5)',
        }}
        className="vertical-timeline-element-content-arrow"
      ></div>
      <h3 className="font-semibold capitalize">Junior Web Developer - Goodbody Health • Hybrid</h3>
      <p className="font-normal !mt-0">Wiltshire, England, UK</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        I worked as a Software Engineer integrating Rest API and Soap API, using PHP OOP, HTML, CSS, JavaScript frameworks, and dealing with JavaScript libraries. I focused on user experiences and followed design patterns for scalable code. I also used Docker for efficient operations and gained experience with gateway integrations and payment gateways.
      </p>
      <span className="vertical-timeline-element-date">Nov 2022 - April 2022</span>
    </div>
  </div>

  {/* Add remaining experience elements as needed */}
</div>

            
          </section>
           {/* Portfolio Section */}
           <section className="py-10">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              <PortfolioItem title="Web1" imageSrc={web1} />
              <PortfolioItem title="Web2" imageSrc={web2} />
              <PortfolioItem title="Web3" imageSrc={web3} />
              <PortfolioItem title="Web4" imageSrc={web4} />
              <PortfolioItem title="Web5" imageSrc={web5} />
              <PortfolioItem title="Web6" imageSrc={web6} />
            </div>
          </section>





          <section id="contact" class="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" style={{opacity: 1}}><h2 class="text-3xl font-medium capitalize mb-8 text-center">GET IN TOUCH</h2><p class="text-gray-700 -mt-6 dark:text-white/80">For direct contact, kindly reach out to me via email at <a class="underline" href="mailto:krishnaveni.nagarapu@gmail.com">krishnaveni.nagarapu@gmail.com</a>or by using the provided form below. Your prompt response is greatly appreciated.</p><form class="mt-10 flex flex-col dark:text-black" action="javascript:throw new Error('A React form was unexpectedly submitted.')"><input class="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type="email" required="" maxlength="500" placeholder="Your email" name="senderEmail"/><textarea class="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" name="message" placeholder="Your message" required="" maxlength="5000"></textarea><button type="submit" class="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">Submit <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg> </button></form></section>







        </main>
        <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
        border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center 
        hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      >
        <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
      </button>    
      







      </div>













    </div>





    


     



  );
}

const PortfolioItem = ({ title, imageSrc }) => (
  <div className="py-6 px-2">
    <Image src={imageSrc} alt={title} className="w-full h-64 object-cover rounded-lg" />
    <h4 className="text-center text-xl pt-4">{title}</h4>
  </div>
);







//             <h2 className="text-3xl font-medium capitalize mb-8 text-center">MY PROJECTS</h2>
//             <div>
// <ProjectsCard/>

//            </div>



      {/* Portfolio Section */}
           {/* <section className="py-10">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              <PortfolioItem title="Web1" imageSrc={web1} />
              <PortfolioItem title="Web2" imageSrc={web2} />
              <PortfolioItem title="Web3" imageSrc={web3} />
              <PortfolioItem title="Web4" imageSrc={web4} />
              <PortfolioItem title="Web5" imageSrc={web5} />
              <PortfolioItem title="Web6" imageSrc={web6} />
            </div>
          </section> */}