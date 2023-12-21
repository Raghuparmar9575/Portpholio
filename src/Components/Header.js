import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<>
<header id="header">
  <div className="d-flex flex-column">
    <div className="profile">
      <img src="assets/img/myprofile.jpg" alt className="img-fluid rounded-circle" />
      <h1 className="text-light"><Link to="index.html">RAGHU PARMAR</Link></h1>
      <div className="social-links mt-3 text-center">
        <Link to="#" className="twitter" target="_blank"><i className="bx bxl-twitter" /></Link>
        <Link to="#" className="facebook" target="_blank"><i className="bx bxl-facebook" /></Link>
        <Link to="https://instagram.com/official_raghu_parmar.06?igshid=MDM4ZDc5MmU=" className="instagram" target="_blank"><i className="bx bxl-instagram" /> </Link>
        <Link to="https://join.skype.com/invite/wTZvgRzKGhGf" className="google-plus" target="_blank"><i className="bx bxl-skype"  /></Link>
        <Link to="https://www.linkedin.com/in/raghuveer-parmar-1290b3230/" className="linkedin" target="_blank"><i className="bx bxl-linkedin" /></Link>
      </div>
    </div>
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li><Link to="/home" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></Link></li>
        <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></Link></li>
        <li><Link to="/resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></Link></li>
        <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></Link></li>
      </ul>
    </nav>{/* .nav-menu */}
  </div>
</header>

</>  )
}

export default Header