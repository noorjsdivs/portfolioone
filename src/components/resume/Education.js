import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1994 - 2009</p>
          <h2 className="text-3xl md:text-4xl font-bold">FORMATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ingenieur en informatique 
            (Maintenance informatique, Développeur web, application, génie logiciel)"
            subTitle="Université ENI FIANARANTSOA (2005 - 2009)"
            des="Située au cœur de Fianarantsoa, notre université est dédiée à l'excellence dans l'enseignement de l'informatique et à la formation de professionnels compétents"
          />
          <ResumeCard
            title="Formation secondaire niveau II"
            subTitle="LTP Beravina FIANARANTSOA (2002 - 2005)"
            des="Les lycées professionnels, également connus sous le nom de lycées techniques, offrent une formation pratique visant à préparer les élèves à exercer un métier spécifique."
          />
          <ResumeCard
            title="Formation secondaire niveau I"
            subTitle="CEG Mahamanina FIANARANTSOA (1999 - 2002)"
            des="Enseignement qui vise à développer chez les apprenants les connaissances générales, les aptitudes et les compétences en lecture et en calcul."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
