import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Social: React.FC = () => {
  return (
    <section className="flex gap-5 justify-center mt-5 md:mt-0">
      <FcGoogle size="27px" className="cursor-pointer" />
      <FaGithub size="25px" className="cursor-pointer text-highlight-border" />
      <FaLinkedin color="#0077B5" size="26px" className="cursor-pointer" />
    </section>
  );
};

export default Social;
