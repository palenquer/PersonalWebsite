import React, { useState } from "react";
import ProjectImage from "../components/Portfolio/ProjectImage";
import TagItem from "../components/Portfolio/TagItem";
import { motion } from "framer-motion";
import LinkButton from "../components/LinkButton";
import Link from "next/link";

export default function Portfolio() {
  const [reactForm, setReactForm] = useState(false);
  const [vueForm, setVueForm] = useState(false);

  const variants = {
    open: { opacity: 1, y: "0%" },
    closed: { opacity: 0, y: "0" },
  };

  const handleReactForm = () => {
    setReactForm(!reactForm);
  };

  const handleVueForm = () => {
    setVueForm(!vueForm);
  };

  return (
    <main className="flex flex-col justify-center items-center w-full h-full md:h-screen py-2 md:py-0">
      <h1 className="text-2xl font-bold text-purple-500 mb-8">My Projects</h1>
      <section className="flex flex-col md:flex-row">
        <Link href="/portfolio/reactform">
          <article
            className={`${
              reactForm ? "" : ""
            }w-80 cursor-pointer mb-4 md:mb-0 md:mr-4 flex relative px-2 md:px-0`}
            onMouseEnter={handleReactForm}
            onMouseLeave={handleReactForm}
          >
            <ProjectImage
              src="/reactform.png"
              alt="reactform img"
              className="w-80 "
            />
            {reactForm && (
              <motion.div
                initial={{ y: "-50%" }}
                animate={reactForm ? "open" : "closed"}
                variants={variants}
                className={`${
                  reactForm ? "" : "hidden"
                } absolute w-full h-full flex text-white  `}
              >
                <div className="absolute h-full w-full flex flex-col justify-center items-center transition duration-500 hover:bg-gray-600 opacity-90 text-white">
                  <h1 className=" text-lg font-bold mb-4">ReactForm</h1>
                  <div className="flex flex-wrap justify-center items-center">
                    <TagItem name="Front-end" />
                    <TagItem name="Back-end" />
                    <TagItem name="React.js" />
                    <TagItem name="Node.js" />
                  </div>
                </div>
              </motion.div>
            )}
          </article>
        </Link>
        <Link href="/portfolio/vueform">
          <article
            className={`${
              vueForm ? "" : ""
            }w-80 cursor-pointer mb-4 md:mb-0 md:mr-0 flex relative px-2 md:px-0`}
            onMouseEnter={handleVueForm}
            onMouseLeave={handleVueForm}
          >
            <ProjectImage
              src="/vueform.png"
              alt="vueform img"
              className="w-80"
            />
            {vueForm && (
              <motion.div
                initial={{ y: "-50%" }}
                animate={vueForm ? "open" : "closed"}
                variants={variants}
                className={`${
                  vueForm ? "" : "hidden"
                } absolute w-full h-full flex text-white  `}
              >
                <div className="absolute h-full w-full flex flex-col justify-center items-center transition duration-500 hover:bg-gray-600 opacity-90 text-white">
                  <h1 className="text-lg font-bold mb-4">VueForm</h1>
                  <div className="flex flex-wrap justify-center items-center">
                    <TagItem name="Front-end" />
                    <TagItem name="Back-end" />
                    <TagItem name="Vue.js" />
                    <TagItem name="Vuex.js" />
                    <TagItem name="Node.js" />
                  </div>
                </div>
              </motion.div>
            )}
          </article>
        </Link>
      </section>
      <LinkButton text="Contact me" href="/contact" />
    </main>
  );
}
