// import React from "react";
import s1 from "../../images/s-1.svg";
import s2 from "../../images/s-2.svg";
import s3 from "../../images/s-3.svg";
import { FaArrowRight } from "react-icons/fa";
import * as sc from './styles';

const Services = () => {
  return (
    <sc.Services className="services" id="services">
      <div className="center-text">
        <h2>
          My <span>Services</span>
        </h2>
      </div>

      <div className="services-content">
        <div className="box">
          <img src={s1} alt="services" />
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
        </div>
        <div className="box">
          <img src={s2} alt="services" />
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
        </div>
        <div className="box">
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
        </div>
      </div>
    </sc.Services>
  );
};

export default Services;