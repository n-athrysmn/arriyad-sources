import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa"
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {

  return (
    <Router>
        <footer className='FooterMenu'>
            <ul className='FooterList'>
                <li><img src={logo} alt="Logo" style={{width:"200px"}}/></li>
                <li><a className='foot-items' href="https://api.whatsapp.com/send?phone=60192549717&text=Hi%20Athira!" target={'_blank'}><FaWhatsapp/> Contact on WhatsApp</a></li>
                <li><a className='foot-items' href="https://www.linkedin.com/in/noraathira/" target={'_blank'}><FaLinkedinIn/> Connect on LinkedIn</a></li>
                <li><hr/></li>
                <li>&copy; {new Date().getFullYear()} Arriyad Resources</li>
            </ul>
        </footer>
    </Router>
  )
}

export default Footer