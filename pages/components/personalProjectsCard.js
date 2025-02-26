import React, { useEffect, useRef } from "react";
import {image} from '../../public/e-2.png';
import {goodbody} from '../../public/goodbody.png';
import {cav1} from '../../public/cav1.png';
import {br} from '../../public/br.png';
import {escp} from '../../public/escp.png';
import {nip} from '../../public/nip.png';
import {survey} from '../../public/survey.png';
import {tfl} from "../../public/tfl.png";
import {login} from "../../public/login.png";
import movie from "../../public/movies.png";
import Image from "next/image";


const PersonalProjectsCard = ({ title, description, image, tags, link, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.animation =
        "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
      cardRef.current.style.animationDelay = `${index * 0.2}s`;
    }
  }, [index]);

  return (
    <a href={link} target="_blank" rel="noreferrer">
    <div
      ref={cardRef}
    //   className="card bg-white shadow-lg rounded-lg overflow-hidden w-72 opacity-0"
      className="card bg-gray-100 border border-black/5  w-72 rounded-lg overflow-hidden relative hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className="p-4 flex justify-center">
        <Image src={image} alt={title}  width={500} // width as a ratio
  height={128}  className="w-full h-32 object-cover" />
      </div>
      <div className="p-4 text-center">
        <a href={link} className="text-blue-500 text-lg font-semibold">
          <i className="lni lni-github-original text-2xl"></i>
        </a>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-700 dark:text-white/70 text-sm mt-2">{description}</p>
        <div className="flex flex-wrap justify-center mt-3 gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
};

const PersonalCardContainer = () => {
  const projects = [
    {
      title: "Ecommerce",
      description: "  This project is a multipage website, with a home page, product details page, and a Cart page.",
      image:
        "/e-2.png",
      tags: ["JavaScript","HTML", "CSS"],
      link: "https://ecommerce-eta-six-19.vercel.app/index.html",
    },
    {
      title: "React Authentication",
      description: "React authentication system with login, protected routes, and persistent auth using Context API.",
      image:
        "/login.png",
      tags: ["React", "Auth", "Context API"],
      link: "https://github.com/Veninagarapu/React-Authentication-System-with-Protected-Routes",
    },
    {
        title: "London Transport Site",
        description: "This React app uses the TFL Unified API and allows users to plan their journey.",
        image:
          "/tfl.png",
        tags: ["React", "JavaScript", "HTML", "CSS"],
        link: "https://storied-rabanadas-de7a71.netlify.app/",
      },
      {
        title: "Movie App",
        description: "This React project provides the list of upcoming, popular, and top-rated movies.",
        image:
          "/movies.png",
          tags: ["React", "JavaScript", "HTML", "CSS"],
        link: "https://lighthearted-dusk-707351.netlify.app/",
      }
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {projects.map((project, index) => (
        <PersonalProjectsCard key={index} {...project} index={index} />
      ))}
    </div>
  );
};

export default PersonalCardContainer;
