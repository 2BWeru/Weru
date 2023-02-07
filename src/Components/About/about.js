import React from "react";
import about from "../../static/Images/1.jpg";
import "./about.css";



function About() {
  return (
    <>
     {/* <!-- about section start --> */}
      <div class="about_section layout_padding">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-6">
                  <div class="about_taital_main">
                    <h4>About Me</h4>
                     <h1 class="about_taital">Discover<hr /></h1>
                     <p class="about_text">
                     I am a junior web developer with a passion for creating innovative and engaging websites and web applications. I am constantly seeking new and exciting opportunities to expand my skillset and gain practical experience.

                     I am an ambitious individual who thrives in a fast-paced and dynamic environment. I am dedicated to delivering high-quality work that exceeds expectations and am always eager to learn and grow as a developer. My goal is to work with a team of like-minded individuals who are passionate about using technology to solve real-world problems and create meaningful and impactful digital experiences.
                      <br />
                      <br />

                     If you are looking for a junior web developer who is passionate, driven, and eager to contribute to the success of your organization, I would be honored to hear from you.
                     </p>
                     <br />
                     <h3>Skills</h3>
                     <div class="row">
                       <div class="col-2">
                         <div>
                           <p className="about-txt">HTML&CSS</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p className="about-txt">JavaScript</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p className="about-txt">React/Angular</p>
                         </div>
                       </div>
                     </div>
                     <div class="row">
                       <div class="col-2">
                         <div>
                           <p className="about-txt">Java</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p className="about-txt">Firebase</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p className="about-txt">Material UI</p>
                         </div>
                       </div>
                     </div>
                    <div class="row">
                        <div class="col-6">
                          <div class="readmore_bt">
                            <a href="#">Hire Me</a>
                          </div>
                        </div>
                     <div class="col-6">
                        <div class="readmore_bt">
                          <a href="#">Download CV</a>
                        </div>
                     </div>
                    </div>
                  </div>
               </div>
               <div class="col-md-6 padding_right_0">
                  <div>
                    <img src={about} class="about_img" />
                    <div className="centered">
                      <h1 className="head-text">Who <br />Am<br />  I</h1>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- about section end -->  */}
    </>
  );
}

export default About;
