import React, { useEffect, useRef } from "react";
import {image} from '../../public/e-2.png';
import {goodbody} from '../../public/goodbody.png';
import {cav1} from '../../public/cav1.png';
import {br} from '../../public/br.png';
import {escp} from '../../public/escp.png';
import {nip} from '../../public/nip.png';
import {survey} from '../../public/survey.png';
import Image from "next/image";


const Card = ({ title, description, image, tags, link, index }) => {
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

const CardContainer = () => {
  const projects = [
    {
      title: "Goodbody Health",
      description: "Wellness company operating in both wellness testing and cbd products",
      image:
        "/goodbody.png",
      tags: ["Laravel", "PHP", "MySQL", "bootstrap"," jQuery", "Wordpress"],
      link: "https://health.goodbodyclinic.com/our-clinics/",
    },
    {
        title: "Cavendish Consultancy - South of Potters Bar",
        description: "South of Potters Bar Consulatation Website",
        image:
        "/cav1.png",
        tags: ["Wordpress", "PHP", "Sass"],
        link: "https://southofpottersbar.co.uk/",
      },
      {
        title: "Cavendish Consultancy - Barking Riverside",
        description: "Barking Riverside Consulatation Website",
        image:
        "/br.png",
        tags: ["Wordpress", "PHP", "Sass"],
        link: "https://barkingriverside-planning.london/",
      },
      {
        title: "Cavendish Consultancy - Neurodiversity in Planning",
        description: "Neurodiversity in Planning Consulatation Website",
        image:
        "/nip.png",
        tags: ["Wordpress", "PHP", "Sass"],
        link: "https://neurodiversityinplanning.co.uk/",
      }, 
    {
        title: "Cavendish Consultancy - ESCP",
        description: "ESCP Business School Consulatation Website",
        image:
        "/escp.png",
        tags: ["Wordpress", "PHP", "Sass"],
        link: "https://escpconsultation.co.uk/",
      },
      {
        title: "Cavendish Consultancy - Survey Application",
        description: "Survey Application for Consulataion websites",
        image:
        "/survey.png",
        tags: ["React", "Redux", "Context API", "Sass"],
        link: "https://aldideptford.whatmatterstoyou.co.uk/",
      }
    // Add more projects if needed
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {projects.map((project, index) => (
        <Card key={index} {...project} index={index} />
      ))}
    </div>
  );
};

export default CardContainer;
