import Image from "next/image";
import Link from "next/link";

import webar from "@/public/work/webar.webp";
import beautyWebar from "@/public/work/beautyWebar.webp";
import eyewearWebAR from "@/public/work/eyewearWebAR.webp";
import skinCareGif from "@/public/work/skincare.webp";
import customizationStudio from "@/public/work/customizationStudio.webp";
import radBeauty from "@/public/work/radBeauty.webp";
import makemeup from "@/public/work/makemeup.jpeg";
import kikii from "@/public/work/kikii.jpeg";
import kinexa from "@/public/work/kinexa.jpeg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: radBeauty,
      title: "Rad Beauty",
      description: "Find dups of your fav brands, Personalized recommendation",
      link: "https://apps.apple.com/in/app/rad-beauty/id6469603525",
      target: "_blank",
    },
    {
      id: 2,
      image: makemeup,
      title: "MakeMeUp",
      description: "Beauty Shopping",
      link: "https://apps.apple.com/in/app/makemeup-beauty-shopping/id1630947116",
      target: "_blank",
    },
    {
      id: 3,
      image: kikii,
      title: "Kikii",
      description: "Kikii Models allows you to conveniently hire professional models for your event and business needs",
      link: "https://apps.apple.com/au/app/kikii/id1455955081",
      target: "_blank",
    },
    {
      id: 4,
      image: kinexa,
      title: "Kinexa Driver",
      description: "Kinexa, a leading provider of Electronic Logging Devices (ELDs) and fleet management solutions, offers a user-friendly platform designed to streamline fleet operations and ensure compliance with FMCSA regulations.",
      link: "https://apps.apple.com/us/app/kinexa-driver/id6739873182",
      target: "_blank",
    }
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                unoptimized={true}
                loading="eager"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110 aspect-square object-contain"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
