// import React from "react";
import s1 from "../../images/s-1.svg";
import s2 from "../../images/s-2.svg";
// import s3 from "../../images/s-3.svg";
// import { FaArrowRight } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import * as sc from "./styles";

const Services = () => {
  return (
    <sc.Services className="services" id="services">
      <div data-aos="zoom-in" className="center-text">
        <h2>
          My <span>Services</span>
        </h2>
      </div>

      <div data-aos="zoom-in" className="services-content">
        <div className="box">
          <img src={s1} alt="services" />
          <h3>Web development</h3>
          <p>
            I offer specialized services in the frontend development of websites
            and applications, standing out for the creation of attractive and
            functional experiences. I use the latest technologies such as
            JavaScript, React, Angular, TypeScript and CSS to design intuitive
            and responsive user interfaces. Each design reflects my clients identity.
          </p>
          {/* <a href="#">
            Download now
            <FaArrowRight />
          </a> */}
        </div>
        <div className="box">
          <img src={s2} alt="services" />
          <h3>Technologies I work with</h3>
          <div className="technologies">
            <IoLogoJavascript />
            <FaReact />
            <IoLogoAngular />
            <SiTypescript />
            <FaCss3Alt />
            <FaGithub />
          </div>
          <p>
            With my mastery of CSS, React, Angular, TypeScript, Git, and
            JavaScript, I have the ability to create engaging and highly
            functional web experiences. From implementing responsive and
            engaging designs.
          </p>
          {/* <a href="#">
            Download now
            <FaArrowRight />
          </a> */}
        </div>
        {/* <div className="box">
          <img src={s3} alt="services" />
          <h3>UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            reiciendis enim laboriosam doloremque eveniet veritatis dolorum,
            tenetur asperiores nemo nulla.
          </p>
          <a href="#">
            Download now
            <FaArrowRight />
          </a>
        </div> */}
      </div>
    </sc.Services>
  );
};

export default Services;
