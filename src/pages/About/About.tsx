// import about from '../../images/about.jpg';
import photo from '../../images/foto.png';
import * as sc from './styles';


const About = () => {
  return (
    <sc.About className="about" id="about">
      <div data-aos="fade-right" className="about-img">
        {/* <img src={about} alt="about" /> */}
        <img src={photo} alt="about" />
      </div>
      <div data-aos="fade-up" className='about-text'>
        <h2>I am <span>software developer</span> <br />
        </h2>
        <div className='exp-area'>
          <p className='exp'>
            Experience:
            <span>3 Years</span>
          </p>
          <p className='exp'>
            Epecialty:
            <span>Product Designer, front-end developer, Developer</span>
          </p>
          <p className='exp'>
            Address:
            <span>Soledad, Colombia</span>
          </p>
          <p className='exp'>
            Email:
            <span>alexmendoza.pacheco@hotmail.com</span>
          </p>
          <p className='exp'>
            Phone:
            <span>+57 3146219186</span>
          </p>
          <p className='exp'>
            Freelance:
            <span>Available</span>
          </p>
        </div>
        {/* <a href="#" className='btn'> View All Projects</a> */}
      </div>
    </sc.About>
  )
}

export default About