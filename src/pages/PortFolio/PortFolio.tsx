// import React from 'react';
import port1 from '../../images/port-1.jpg';
import port2 from '../../images/port-2.jpg';
import port3 from '../../images/port-3.jpg';
import port4 from '../../images/port-4.jpg';
import port5 from '../../images/port-5.jpg';
import port6 from '../../images/port-6.jpg';
import { FaGithub } from "react-icons/fa";
import * as sc from './styles';

const PortFolio = () => {
  return (
    <sc.PortFolio className='portfolio' id='portfolio'>
        <div className='center-text'>
            <h2>My <span>Portfolio</span></h2>
        </div>
        <div className='portfolio-content'>
            <div className='row'>
                <img src={port1} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Website Design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development For Dark X</h4>
            </div>
            <div className='row'>
                <img src={port2} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Website Design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development For Dark X</h4>
            </div>
            <div className='row'>
                <img src={port3} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Website Design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development For Dark X</h4>
            </div>
            <div className='row'>
                <img src={port4} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Website Design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development For Dark X</h4>
            </div>
            <div className='row'>
                <img src={port5} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Website Design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development For Dark X</h4>
            </div>
            <div className='row'>
                <img src={port6} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Website Design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development For Dark X</h4>
            </div>
        </div>
    </sc.PortFolio>
  )
}

export default PortFolio;