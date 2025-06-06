"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { sleep } from "../../components/utils";
import { useEffect, useState } from "react";

export default function Introduction() {
  const [developerClasses, setDeveloperClasses] = useState<string>("border-r-2 animate-blink-caret")

  // For the text before developer (typewriter animation). 
  const [webClasses, setWebClasses] = useState<string>("")
  const [textContent, setTextContent] = useState<string>("");
  useEffect(() => {
    (async () => {
      await sleep(2);
      setDeveloperClasses("")
      setWebClasses('border-r-2 animate-blink-caret')
      await sleep(1);
      const text = "Web ";
      for (let i = 0; i < text.length; i++) {
        setTextContent(text.substring(0, i + 1))
        await sleep(0.25)
      }
      await sleep(1);
      setWebClasses("")
    })();
  }, [])
  return (
    <div id='introduction' className="relative flex min-h-screen flex-col items-start justify-center">
      <div className="ml-[5%] sm:ml-24">
        <h1 className="relative w-auto text-5xl font-black tracking-wider transition-all after:absolute after:-inset-x-0 after:-bottom-5 after:top-auto after:h-1 after:bg-emerald-300 after:content-[''] hover:tracking-widest sm:text-7xl">
          Anay Paraswani
        </h1>
        <h2 className={`mt-8 text-4xl tracking-wide`}>
          <span className={`text-orange-800 border-orange-800 ${webClasses}`}>{textContent}</span>
          <span className={`${developerClasses}`}>Developer</span>
        </h2>
        <div className="flex gap-5 mt-6">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl text-white hover:text-emerald-300 transition-all cursor-pointer"
            onClick={() => window.open("https://github.com/Anay-208/")}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-4xl text-white hover:text-emerald-300 transition-all cursor-pointer"
            onClick={() => window.open("mailto:me@anayparaswani.dev")}
          />
        </div>

        {/* Modern Banner for Internship Availability */}
        <div className="mt-4 p-5 bg-emerald-300 text-black rounded-lg shadow-lg">
          <p className="text-lg font-semibold">
            🚀 I am currently open for internships from <strong>May-end</strong>.{" "}
            <a
              href="mailto:me@anayparaswani.dev"
              className="text-black underline hover:text-emerald-700"
            >
              Contact me
            </a>{" "}
            to collaborate!
          </p>
        </div>
      </div>

      {/* <p className="text-slate-700 absolute bottom-0 left-1/2 transform -translate-x-1/2">This website is still in development.</p> */}

    </div>
  )
}