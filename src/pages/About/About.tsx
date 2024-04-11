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
            <span>Experience:</span>
            <span>3 Years</span>
          </p>
          <p className='exp'>
            <span>Epecialty:</span>
            <span>Product Designer, front-end developer, Developer</span>
          </p>
          <p className='exp'>
            <span>Address:</span>
            <span>Soledad, Colombia</span>
          </p>
          <p className='exp'>
            <span>Email:</span>
            <span>alexmendoza.pacheco@hotmail.com</span>
          </p>
          <p className='exp'>
            <span>Phone:</span>
            <span>+57 3146219186</span>
          </p>
          <p className='exp'>
            <span>Freelance:</span>
            <span>Available</span>
          </p>
        </div>
        {/* <a href="#" className='btn'> View All Projects</a> */}
      </div>
    </sc.About>
  )
}

export default About