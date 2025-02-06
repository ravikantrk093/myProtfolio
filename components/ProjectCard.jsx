import Image from "next/image";
import Link from "next/link";

import webar from "@/public/work/webar.webp";
import beautyWebar from "@/public/work/beautyWebar.webp";
import eyewearWebAR from "@/public/work/eyewearWebAR.webp";
import skinCareGif from "@/public/work/skincare.webp";
import customizationStudio from "@/public/work/customizationStudio.webp";
import radBeauty from "@/public/work/radBeauty.webp";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: webar,
      title: "webAR",
      description: "Augumented Try-on",
      link: "https://cdn.mirrar.com/mirrar-jewellery-webar-new/index.html?brand_id=ffae6dac-89e4-41df-8973-e58a60efc9c4&emptyCache=1&sku=503120DCIADA09",
      target: "_blank",
    },
    {
      id: 2,
      image: beautyWebar,
      title: "Augumented Beauty",
      description: "Apply make up at home, choose the right shade for yourself",
      link: "https://products.mirrar.com/products/beauty?label=Lipstick",
      target: "_blank",
    },
    {
      id: 3,
      image: eyewearWebAR,
      title: "Eyewear 3D try-on",
      description: "Gotta Catch'em All. Explore your Pokemon",
      link: "https://cdn.mirrar.com/general/mirrar.html?sku=RAYBAN_ANDYFull_Rim_SquareSunglasses&brand_id=ec80a062-64f3-467b-b02a-1a894204b9e4&emptyCache=0",
      target: "_blank",
    },
    {
      id: 4,
      image: skinCareGif,
      title: "Skin Analysis",
      description: "Get a detailed report of your skin",
      link: "https://products.mirrar.com/products/skincare",
      target: "_blank",
    },
    {
      id: 5,
      image: radBeauty,
      title: "Rad Beauty",
      description: "Find dups of your fav brands, Personalized recommendation",
      link: "https://www.rad.beauty/",
      target: "_blank",
    },
    {
      id: 6,
      image: customizationStudio,
      title: "Customization Studio",
      description: "Platform to showcase variants of 3D items",
      link: "https://customization-studio.mirrar.com/",
      target: "_blank",
    },
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
