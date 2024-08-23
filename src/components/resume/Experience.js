import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - PRESENT</p>
          <h2 className="text-3xl md:text-4xl font-bold">EXPERIENCE PROFESSIONNELS</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="RESPONSABLE INFORMATIQUE"
            subTitle="STICA COSOURCING - (2022 - Présent)"
            result="MADAGASCAR"
            des="Le rôle du responsable informatique est de garantir l’organisation, 
            le suivi ainsi que la gestion du système informatique de l’entreprise."
          />
          <ResumeCard
            title="Developpeur web & Technicien Maintenance Informatique"
            subTitle="Japanese Embassy - (2019 - 2022)"
            result="MADAGASCAR"
            des="Réalise et sécurise l’installation des nouveaux équipements ou logiciels du parc informatique."
          />
          <ResumeCard
            title="Technicien Maintenance Informatique"
            subTitle="VIVETIC - MADCOM (2014 - 2019)"
            result="MADAGASCAR"
            des="Réalise et sécurise l’installation des nouveaux équipements ou logiciels du parc informatique."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
