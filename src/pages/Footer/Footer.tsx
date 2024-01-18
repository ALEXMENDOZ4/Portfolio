// import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import * as sc from "./styles";

const Footer = () => {
  return (
    <sc.Footer className='footer'>
        <div className='copyright'>
            <p>2023 Alex Mendoza, All Rights Reserved.</p>
        </div>
        <a href="#home" className='scroll-top'>
            <FaArrowUp />
        </a>
    </sc.Footer>
  )
}

export default Footer;