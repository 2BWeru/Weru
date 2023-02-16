import React from "react";
import "./services.css";
import { BsCodeSlash } from 'react-icons/bs';
import { BiShapeSquare } from 'react-icons/bi';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { BsFillUmbrellaFill } from 'react-icons/bs';
import { SiAntdesign } from 'react-icons/si';
import { FaTv } from 'react-icons/fa';





function Services () {
    return(
        <>
         {/* <!-- services section start --> */}
      <div class="services_section layout_padding">
         <div class="container">
            <h4>My Services</h4>
            <h1 class="services_taital"><hr />What I Do</h1>
            
            <div class="services_section_2">
               <div class="row">
                  <div class="col-md-4">
                     <div className="service-text">
                        <div>
                        <BiShapeSquare className="icons" />

                        </div>
                         <h1 className="service-header">Fully Responsive</h1>
                         <p>I create websites that are fully responsive and optimized for all devices and screen sizes, ensuring that your customers and visitors have an optimal browsing experience no matter where they access your site from.</p>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div className="service-text">
                        <div>
                        <BsCodeSlash className="icons" />
                        </div>
                        <h1 className="service-header">Clean Code</h1>
                        <p> I write clean, well-organized, and efficient code that is easy to maintain and update over time. This helps to ensure that your website remains secure and free from bugs and technical issues.</p>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div className="service-text">
                        <div>
                        <MdOutlineBrandingWatermark  className="icons" />
                        </div>
                        <h1 className="service-header">Fast Support</h1>
                        <p> I understand the importance of having a website that is always up and running, and I provide fast and responsive support to help ensure that your website remains accessible and functional at all times.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="services_section_2">
               <div class="row">
                  <div class="col-md-4">
                     <div className="service-text">
                        <div>
                        <BsFillUmbrellaFill className="icons" />
                        </div>
                        <h1 className="service-header">Development</h1>
                        <p> I provide complete website development services, including design, coding, and implementation.
                            I use React to create custom and responsive websites that are optimized for all devices.</p>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div className="service-text">
                        <div>
                        <SiAntdesign className="icons"/>
                        </div>
                        <h1 className="service-header">Code Optimization</h1>
                        <p> I have a strong understanding of best practices for optimizing React code, and I can ensure that my projects are efficient, fast, and scalable.</p>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div className="service-text">
                        <div>
                        <FaTv className="icons"/>
                        </div>
                        <h1 className="service-header">Web Design</h1>
                        <p>I provide a range of web design services, including custom website design, redesigns of existing websites, and the creation of landing pages and other web-based marketing materials.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- services section end --> */}
        </>
    )
}

export default Services;