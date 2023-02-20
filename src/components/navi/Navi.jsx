import { useEffect, useState, React } from 'react'
import './navi.css'
import logo from '../../assets/logo.png'
import { FaHome, FaUserGraduate, FaBriefcase, FaBars, FaTimes, FaPhoneAlt, FaWhatsapp, FaLinkedinIn } from "react-icons/fa"
import { BrowserRouter as Router } from 'react-router-dom'

const Navi = () => {

    const [isClicked, setIsClicked] = useState(false); 
    const [isScrolled, setIsScrolled] = useState(true);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const handleScroll= () => {
        if (window.pageYOffset > 1) {
            setIsScrolled(false);
        } else {
            setIsScrolled(true);
        }
        };

  return (
    <Router>
        <nav className={isScrolled ? 'NavbarMenu' : 'NavbarMenu scrolled'}>
            <span className='logo'><img src={logo} alt="Logo" style={{width:"100px"}}/></span>
            <div className='toggler'><span onClick={handleClick}>{isClicked ? <FaTimes/> : <FaBars/> }</span></div>
            <ul className={isClicked ? 'MenuList active' : 'MenuList' }>
                <li><a className='nav-items' href="#home"><FaHome/> Home</a></li>
                {/* <li><a className='nav-items' href="#about"><FaUserGraduate/> About</a></li> */ }
                <li><a className='nav-items' href="#projects"><FaBriefcase/> Projects</a></li>
                {/* <li><a className='nav-items' href="#contacts"><FaPhoneAlt/> Contacts</a></li> */ }
                <li><a className='nav-items' href="https://api.whatsapp.com/send?phone=60192549717&text=Hi%20Athira!" target={'_blank'}><FaWhatsapp/></a></li>
                <li><a className='nav-items' href="https://www.linkedin.com/in/noraathira/" target={'_blank'}><FaLinkedinIn/></a></li>
            </ul>
        </nav>
    </Router>
  )
}

export default Navi