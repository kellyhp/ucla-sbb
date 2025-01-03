import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import coverImage from "../../public/_images/cover/cover-image.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[calc(65vh)]"
      style={{
        backgroundImage: `url(${coverImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-1/4 translate-y-1/2 w-full text-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Smiles Beyond Boundaries
        </h1>
        <p className="text-white mt-4 px-6 md:px-0 text-xl">
          University of California, Los Angeles
        </p>
        <div className="flex flex-row justify-center items-center mt-6">
          <a
            href="https://www.instagram.com/sbbatucla/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full h-full text-white"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

