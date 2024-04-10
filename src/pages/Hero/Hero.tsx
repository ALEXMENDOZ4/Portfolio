import * as sc from './styles';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import photo from '../../images/foto.png';

const Hero = () => {
  return (
    <>
      <sc.Section className="hero" id="home">
        <div className="main-content"
        // data-aos="zoom-in"
        >
          <h4>Hi, There!</h4>
          <h1>I'm <span>Alex Mendoza</span></h1>
          <p>I am a passionate software developer, an architect of digital dreams and a builder of virtual realities. Every line of code I write is a fragment of my creativity and dedication.</p>
          <div className='social'>
            <a href="https://www.facebook.com/profile.php?id=100088535048143" target='_blank'><FaFacebookF/></a>
            <a href="https://www.instagram.com/alex_mendoz410/" target='_blank'><FaInstagram/></a>
            <a href="https://github.com/ALEXMENDOZ4" target='_blank'><FaGithub/></a>
            {/* <a href="#"><IoLogoYoutube/></a> */}
            <a href="https://www.linkedin.com/in/alex-mendoza-56045b223/" target='_blank'><FaLinkedin /></a>
            <a href="https://twitter.com/alexmendoz78134" target='_blank'><FaTwitter/></a>
          </div>
          <div className="main-btn">
              <a href="#" className="btn">Hire me</a>
              <a href="https://drive.google.com/file/d/1wpDPS1dGZuTd5FuBDceuCteX34CJ7CeU/view?usp=sharing" target='_blank' download="Curriculum Alex Mendoza" className="btn btn2">Download CV</a>
          </div>
        </div>
        <div data-aos="fade-left">
          <img src={photo} alt="foto" />
        </div>
      </sc.Section>
    </>
  )
}

export default Hero;