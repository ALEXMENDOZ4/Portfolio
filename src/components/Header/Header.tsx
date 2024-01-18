import { useEffect, useState } from 'react';
import * as sc from './styles';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Header = () => {

  const [issticky, setIsSticky] = useState(false);
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
      setIcon(false);
    }
    
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const viewIcon = () => {
    setIcon(!icon);
  }

  return (
    <>
      <sc.Header $issticky={issticky} $icon={icon}>
        <a href="#" className="logo">Developer<span>Alex Mendoza.</span></a>  
        <div className="bx bx-menu menu-icon" onClick={viewIcon}>{icon ? <MdClose />  : <RxHamburgerMenu/>}</div>     
        <ul className='navList'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='contactme'>
            <a href="#" className='h-btn'>Contact me</a>
        </div>
      </sc.Header>
    </>
  )
}

export default Header;