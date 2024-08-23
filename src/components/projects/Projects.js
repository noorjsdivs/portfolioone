import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISITEZ MON PORTFOLIO ET DONNEZ VOTRE AVIS"
          des="Mes projets"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CREATION ET REFONTE DE SITE."
          des=" La conception (et encore plus la refonte) d’un site internet mérite une attention 
          toute particulière dans les choix techniques et ergonomiques à partis des contenus et photos que vous aurez arrêtés. 
          Nous développons des sites responsive omnicanal (PC, Tablette et Smartphone) qui répondent aux attentes de nos clients. 
          Leur visibilité sur les moteurs de recherches est assuré par un référencement naturel optimisé (SEO). 
          Nous pouvons également en assurer la maintenance technique et l’hébergement 
          sur des Data-Center certifiés Green Web et ordonnancer une campagne Adwords si vous le décider."
          src={projectOne}
        />
        <ProjectsCard
          title="RÉFÉRENCEMENT NATUREL"
          des=" Le référencement naturel (SEO) se réfléchit et se travaille
          au quotidien pour une stratégie digitale efficace en termes 
          de retour sur investissement. Un bon positionnement sur Google
          et une bonne visibilité en générale commence avec un audit SEO 
          et une analyse de la concurrence sur la toile. Une présence entretenue
          sur les réseaux sociaux et la mise en place d’un blog professionnel 
          complètent avantageusement le dispositif de référencement. 
          Nous pourrons vous proposer la rédaction d’articles de fond 
          ou d’opportunisme d’actualités et une veille de votre e-reputation 
          sur les réseaux sociaux majeurs."
          src={projectTwo}
        />
        <ProjectsCard
          title="SOUS-TRAITANCE WEB"
          des=" Professionnels de la communication, vous cherchez à étendre vos compétences vers les métiers du web, 
          ou souhaitez développer votre business tout en maitrisant votre masse salariale. Nous participons 
          au développement d’agences de communication françaises et ce grâce à notre expertise et un panel d’offres 
          pouvant satisfaire chaque besoin. Travail en marque blanche, prestation en tant que partenaire technique 
          ou même externalisation de personnel, nous pouvons adapter chacune de nos prestations à vos besoins. 
          La disponibilité de nos équipes sont mises au service de vos clients."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects