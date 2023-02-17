import React from "react";
import logo from "../../static/images/logo.png";
import header1 from "../../static/Images/1676115112461-removebg-preview.png"
import header2 from "../../static/Images/1676115078174-removebg-preview.png"
// import {BsArrowDownCircleFill} from "react-icons/bs";
import "./header.css"

function Header() {
    return(
     <>
      {/* <!-- header section start --> */}
      <div class="header_section">
         <div class="header_main">
            <div class="mobile_menu">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="logo_mobile"><a href="index.html"><img src={logo} /></a></div>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav">
                        <li class="nav-item">
                           <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="services.html">Services</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link " href="blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link " href="contact.html">Contact</a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <div class="container-fluid">
               <div class="menu_main">
                  <h2 className="name">BETTY <span className="line">|</span> WAMAITHA <span className="line">|</span>WERU</h2>
               </div>
            </div>
         </div>
         {/* <!-- banner section start --> */}
         <div class="banner_section layout_padding">
                     <div class="container">
                              <h1 class="banner_taital">Hello! I'M Betty </h1>
                              <h3 class="banner_text">I'm a creative Freelancer & FrontEnd Web Developer</h3>
                     
                     </div>
                  </div> 
               </div>

      {/* <!-- header section end --> */}
     </>
    )
}

export default Header;