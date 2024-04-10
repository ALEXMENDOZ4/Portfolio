// import React from 'react';
import port1 from '../../images/image-1.jpg';
import port2 from '../../images/image-2.jpg';
import port3 from '../../images/port-3.jpg';
import port4 from '../../images/port-4.jpg';
import port5 from '../../images/port-5.jpg';
// import port6 from '../../images/port-6.jpg';
import { FaGithub } from "react-icons/fa";
import * as sc from './styles';

const PortFolio = () => { 

  return (
    <sc.PortFolio className='portfolio' id='portfolio'>
        <div data-aos="zoom-in-up" className='center-text'>
            <h2>My <span>Portfolio</span></h2>
        </div>
        <div data-aos="zoom-in-up" className='portfolio-content'>
            <a href="https://loan-front.vercel.app/" target="_blank" className='row'>
                <img src={port1} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Loan quote website design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development</h4>
            </a>
            <a href="https://dashboard-sigma-navy.vercel.app/" target='_blank' className='row'>
                <img src={port2} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>dashboard design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development</h4>
            </a>   
            <a href="https://react-crud-api-gold.vercel.app/" target='_blank' className='row'>
                <img src={port3} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>User manager</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development</h4>
            </a>
            <a href="https://prueba-aplicativo.vercel.app/" target='_blank' className='row'>
                <img src={port4} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Login system design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development</h4>
            </a>
            <a href="https://react-movie-2vapyqpdt-alexmendoz4.vercel.app/"  target="_blank" className='row'>
                <img src={port5} alt="port" />
                <div className='main-row'>
                    <div className='row-text'>
                        <h5>Movie website design</h5>
                    </div>
                    <div className='row-icon'>
                        <FaGithub />
                    </div>
                </div>
                <h4>Website Development</h4>
            </a>
        </div>
    </sc.PortFolio>
  )
}

export default PortFolio;