import Head from "next/head";
import { BsFillMoonStarsFill, BsSun, BsLinkedin, BsGithub } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";

import ScrollSpy from "react-ui-scrollspy";
import ProjectsCard from './projects_card';
import Skills from "./components/skills.js";
import ContactForm from "./contactForm.js";
import krish from '../public/krish.png'
import Card from './components/card.js';
import PersonalProjectsCard from'./components/personalProjectsCard.js';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [projectType, setProjectType] = useState("current");
  
  function toggleClick(e) {
    console.log(e.target.value);
    setProjectType(e.target.value);
    console.log(projectType);
  }
  

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Show when scrolled down
    } else {
      setIsScrolled(false); // Hide when at the top
    }
  };
  
  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Set active section
  const handleSetActive = (to) => {
    console.log("Active Section:", to); // ✅ Debugging
    setActiveSection(to);

  };

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  


  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="__className_a64ecd bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <div className="bg-gradi absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#000000]"></div>
        <div className="bg-grad absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#040419]"></div>
        {/* Navigation */}
        <header className="z-[999] relative">
          {isScrolled && (
            <div
              className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[26rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
              style={{
                opacity: 1,
                transform: 'translate3d(-50%, 0, 0)',
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
              }}
            ></div>
          )}

          <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-gray-300">
              <li className="h-3/4 flex items-center justify-center relative">
                <a
                 onClick={(e) => onPress(e)} href="#about"
                
                  className="flex cursor-pointer w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
                >
                  About
                  <span
                   data-to-scrollspy-id="about"
                    className="hidden cursor-pointer bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
                  ></span>
                </a>
              </li>

              <li className="h-3/4 flex items-center justify-center relative">
                <a
                  onClick={(e) => onPress(e)} href="#projects"
               
                  className="flex cursor-pointer w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
                >
                  Projects
                  <span
                     data-to-scrollspy-id="projects"
                    className="hidden bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
                   
                  ></span>
                </a>
              </li>

              <li className="h-3/4 flex items-center justify-center relative">
                <a
                  onClick={(e) => onPress(e)} href="#skills"
                 
                  className="flex cursor-pointer w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
                >
                  Skills
                  <span
                   data-to-scrollspy-id="skills"
                    className="hidden bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
                  ></span>
                </a>
              </li>

              <li className="h-3/4 flex items-center justify-center relative">
                <a
                  onClick={(e) => onPress(e)} href="#experience"
               
                  className="flex cursor-pointer w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
                >
                  Experience
                  <span
                     data-to-scrollspy-id="experience"
                    className="hidden bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-purple-900 transition-all duration-200"
                    
                  ></span>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="z-[99] relative flex flex-col items-center px-4">
          {/* Hero Section */}
          <ScrollSpy
          scrollThrottle={100}
          // onUpdateCallback={(id) => console.log(id)}
          useBoxMethod={false}
          onUpdateCallback={handleSetActive}
          >

    
          <section className="flex flex-col items-center px-4" id="about">
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-20 h-20 relative overflow-hidden mt-6 md:h-20 md:w-20">
              <Image src='/krish.png' layout="fill" objectFit="cover" />
            </div>

            {/* <div>
              <Image alt="Krishna" fetchpriority="high" width="192" height="192" decoding="async" data-nimg="1" className="h-24 w-24 rounded-full object-cover " src={deved} layout="fill" objectFit="cover" />
            </div> */}

            <div className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
              <h2 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]">
                <span className="font-bold sm:text-4xl">Krishna Nagarapu</span>
                <p>I'm a developer passionate about <span className="font-bold">programming.</span></p>
                My background encompasses Web Development & Structural Engineering
              </h2>

              <div className="flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                {/* LinkedIn */}
                <a 
                  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full 
                            focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack 
                            dark:bg-white/10 dark:text-white/60" 
                  href="https://www.linkedin.com/in/krishna-nagarapu/" 
                  target="_blank"
                >
              <BsLinkedin />
                </a>

                {/* GitHub */}
                <a 
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full 
                            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
                            transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" 
                  href="https://github.com/Veninagarapu" 
                  target="_blank"
                >
                <BsGithub/>
                </a>
              </div>
            </div>

            <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>

            {/* About Section */}
            <section className="about-me mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
              <h2 className="text-3xl font-medium capitalize mb-8 text-center">ABOUT ME</h2>
              <p className="mb-3">
                After completing my Master's in Structural Engineering, I decided to follow my passion for programming and enrolled in a web development bootcamp at Bath Spa University. My transition into tech was driven by countless hours of learning, practicing, and refining my coding skills.
              </p>

              <p>
                I gained valuable experience as a Web Developer at Cavendish Consultancy, contributing to various projects such as developing a survey app in React and managing WordPress-based websites. Prior to this, as a Junior Web Developer at Goodbody Health, I worked with PHP, Laravel, and WordPress to develop and maintain applications for health and wellness services.
              </p>
            </section>
          </section>
     

          {/* Projects Section */}
       
          <section className="scroll-mt-28 mb-28" id="projects">
            <section className="portfolio max-w-[70rem] text-center" id="portfolio">
              {/* P O R T F O L I O */}
              <h2 className="text-3xl font-medium capitalize mb-8 text-center">MY PROJECTS</h2>

              <div className="portfolio-container">
                <div className="toggle-buttons max-w-[50rem]">
                  <button
                    onClick={toggleClick}
                    value="current"
                    className={projectType === "current" ? "active-project" : "toggle-button"}
                  >
                    {"Work Projects"}
                  </button>

                  <button
                    onClick={toggleClick}
                    value="generalassembly"
                    className={projectType === "generalassembly" ? "active-project" : "toggle-button"}
                  >
                    Personal Projects
                  </button>

                  {/* <button
                    onClick={toggleClick}
                    value="past"
                    className={projectType === "past" ? "active-project" : "toggle-button"}
                  >
                    Past Projects
                  </button> */}
                </div>

                {projectType === "" ? (
                  <h3>Click above to view projects</h3>
                ) : (
                  <>
                    {projectType === "current" ? <><Card/></>: null}
                    {projectType === "generalassembly" ? (
                      <>
                        {/* <TFLProject />
                        <MovieAppProject /> */}
                        <PersonalProjectsCard/>
                      </>
                    ) : null}
                    {projectType === "past" ? (
                      <>
                        <Calculator />
                        <Rock />
                        {/* <Urban /> */}
                      </>
                    ) : null}
                  </>
                )}

                <a href="#portfolio" className="totop">
                  Top of section<i className="fa-solid fa-angle-up"></i>
                </a>
              </div>
            </section>
          </section>  
      

          {/* Skills Section */}
      
          <section id="skills" className="flex flex-col justify-center mx-auto
          mb-20 max-w-[45rem] items-center text-center leading-8 sm:mb-28 scroll-mt-28">
          <Skills/>
          </section>
       
      
          {/* Experience Section */}
          <section className="scroll-mt-28 mb-28" id="experience">
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">EXPERIENCE</h2>
            <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
              
              {/* Experience Item 1 */}
              <div className="vertical-timeline-element">
                <span
                  style={{ background: 'white', fontSize: '1.5rem' }}
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
                    background: '#f3f4f6',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  className="vertical-timeline-element-content bounce-in"
                >
                  <div
                    style={{ borderRight: '0.4rem solid #9ca3af' }}
                    className="vertical-timeline-element-content-arrow"
                  ></div>
                  <h3 className="font-semibold capitalize">Web Developer - Cavendish Consultancy • Hybrid</h3>
                  <p className="font-normal !mt-0">Southampton, England, UK</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    At Cavendish Consultancy, I developed and managed multiple custom WordPress projects, implemented new features, built a React-based survey app, and collaborated with UX and marketing teams. My expertise includes React, PHP, HTML, CSS, JavaScript, Sass, Git, VS Code, Adobe XD, Photoshop, and FileZilla. I also integrated APIs, optimized UI/UX, and provided Google Analytics tracking and reports.
                  </p>
                  <span className="vertical-timeline-element-date">May 2023 - July 2024</span>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="vertical-timeline-element">
                <span
                  style={{ background: 'white', fontSize: '1.5rem' }}
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
                    background: '#f3f4f6',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  className="vertical-timeline-element-content bounce-in"
                >
                  <div
                    style={{ borderRight: '0.4rem solid #9ca3af' }}
                    className="vertical-timeline-element-content-arrow"
                  ></div>
                  <h3 className="font-semibold capitalize">Junior Web Developer - Goodbody Health • On-site</h3>
                  <p className="font-normal !mt-0">Wiltshire, England, UK</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    At Goodbody Health, I developed and maintained PHP applications, created custom WordPress themes, and designed responsive UI components. I used Ajax and jQuery for dynamic content updates and optimized website performance. Additionally, I managed MySQL databases and deployed projects using DeployHQ. My expertise includes PHP OOP, HTML, CSS, JavaScript, Bootstrap, Sass, WordPress, MySQL, Git, and Figma.
                  </p>
                  <span className="vertical-timeline-element-date">Nov 2022 - April 2022</span>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="vertical-timeline-element">
                <span
                  style={{ background: 'white', fontSize: '1.5rem' }}
                  className="vertical-timeline-element-icon bounce-in"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </span>
                <div
                  style={{
                    background: '#f3f4f6',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  className="vertical-timeline-element-content bounce-in"
                >
                  <div
                    style={{ borderRight: '0.4rem solid #9ca3af' }}
                    className="vertical-timeline-element-content-arrow"
                  ></div>
                  <h3 className="font-semibold capitalize">Web Development Bootcamp - Bath Spa University • Remote</h3>
                  <p className="font-normal !mt-0">Bath, England, UK</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    I embarked on a 16-week intensive web development boot camp, which provided me with a strong foundation in software development, focusing on React, JavaScript, CSS, HTML, and Git. Through collaborative group projects, I gained valuable experience working in team settings and real-time problem-solving. This bootcamp not only sharpened my technical expertise but also contributed to my growth both personally and professionally.
                  </p>
                  <span className="vertical-timeline-element-date">June 2022 - Sep 2022</span>
                </div>
              </div>
            </div>
          </section>
          </ScrollSpy>

        <ContactForm/>       
        </main>
        <button
      onClick={() => setDarkMode(!darkMode)}
      className="z-[999] fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
      border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center 
      hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {!darkMode ? (
       <BsSun className="cursor-pointer text-2xl" />
      ) : (
        <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
      )}
    </button>     
      </div>
      {/* <footer className="mb-10 px-4 text-center bg-gray-950 text-gray-950"><small className="mb-2 block text-xs">© 2023 | Made with ❤️ by Krishna Nagarapu</small></footer> */}
    </div>
  );
}

