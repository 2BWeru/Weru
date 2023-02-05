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
                     <h1 class="about_taital">Discover</h1>
                     <p class="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
                     <br />
                     <h3>Skills</h3>
                     <div class="row">
                       <div class="col-2">
                         <div>
                           <p>HTML&CSS</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p>JavaScript</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p>React/Angular</p>
                         </div>
                       </div>
                     </div>
                     <div class="row">
                       <div class="col-2">
                         <div>
                           <p>Java</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p>Firebase</p>
                         </div>
                       </div>
                       <div class="col-2">
                         <div>
                           <p>Material UI</p>
                         </div>
                       </div>
                     </div>
                    <div class="row">
                        <div class="col-6">
                          <div class="readmore_bt">
                            <a href="#">Github</a>
                          </div>
                        </div>
                     <div class="col-6">
                        <div class="readmore_bt">
                          <a href="#">linkedin</a>
                        </div>
                     </div>
                    </div>
                  </div>
               </div>
               <div class="col-md-6 padding_right_0">
                  <div><img src={about} class="about_img" />
                  <div className="centered">
                    <h1>Who I Am</h1>
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
