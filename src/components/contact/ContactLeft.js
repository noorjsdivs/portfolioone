import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0a1128] to-[#0a1128] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Lucien ANDRIAMIHAJA</h3>
        <p className="text-lg font-normal text-gray-400">
          Développeur web freelance
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Je suis Développeur et designer, basé à TANANARIVE. Actuellement, je travaille en local/freelance..
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Téléphone : <span className="text-lightText">+261 34 51 050 83 - +261 34 46 082 87</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          E-mail: <span className="text-lightText">lucien.peterson@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Trouve-moi</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft