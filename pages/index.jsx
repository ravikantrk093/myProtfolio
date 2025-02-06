import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Link from "next/link";
import visitingCard from "@/public/Pravin.png"

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking for better oppurtunities.",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
    if(!visitingCard){
      console.log("Visiting card missing")
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pravin ✦ senior developer, tech lead</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-[auto] 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
            <Image
              src={currentTheme === "dark" ? Avatar_White : Avatar_Black}
              alt="pravin"
              width="80"
              height="80"
            />
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">ravi kant tiwari</span>
                <span>
                  <Image
                    src={currentTheme === "dark" ? BooWhite : BooBlack}
                    alt="boo"
                    width="25"
                    height="25"
                  />
                </span>
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/ravi-kant-tiwari-43a52213b/"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@ravikant</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
              I am a results-driven iOS Developer with over six years of experience in designing and building high-performance, scalable mobile applications. With a deep understanding of Swift, SwiftUI, and Flutter, I specialize in crafting seamless user experiences backed by optimized architecture and efficient system design. My expertise spans across AR/AI integration, SDK development, and performance optimization, ensuring apps run smoothly at scale. Having worked on B2C and enterprise-level solutions, I am committed to leveraging the latest technologies to create innovative and impactful mobile experiences that drive business success.
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
