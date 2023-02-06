import React from "react";
import p1 from "../../static/images/client-img.png";
import p2 from "../../static/images/quick-icon.png";




function Projects() {
  return (
    <>
      {/* <!-- client section start --> */}
      <div class="client_section layout_padding">
         <div class="container-fluid">
           <h1 class="client_taital">Projects</h1>
            <div class="client_section_2">
             <div class="row">
               <div class="col-6">
                 <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="client_main">
                           <div class="box_left">
                              <p class="lorem_text">
                                 <a href="https://quizzmasha.netlify.app/"><mark>Quiz__Masha</mark> </a>
                                  is a website developed to test programming skills for Frontend Developers through the provided Quizes 
                                  <p><i>JavaScript, Angular Js, Rest API, BootStrap</i></p>
                              
                              </p>
                           </div>
                           <div class="box_right">
                              <div class="client_taital_left">
                                 <div class="client_img">
                                   <img src={p1}/>

                                   </div>
                                 <div class="quick_icon">
                                   <img src={p2} />
                                   </div>
                              </div>
                              <div class="client_taital_right">
                                 <h4 class="client_name">Quiz__Masha</h4>
                                 <p class="customer_text"><a href="https://github.com/2BWeru/Quizz_Masha">Github</a></p>
                              </div>
                           </div>
                     </div>
                     
                  </div>
               </div>
             </div>

             <div class="col-6">
                 <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="client_main">
                           <div class="box_left">
                              <p class="lorem_text">
                                 <a href="https://2bweru.github.io/Pizza_Me/"><mark>Pizza__Me</mark></a>Website allows customers to make an order online,choose pick up destination or delivery option and then proceed to checkout
                                 <p><i>JavaScript, Html&Css,Bootstrap</i></p>
                              </p>
                           </div>
                           <div class="box_right">
                              <div class="client_taital_left">
                                 <div class="client_img">
                                   <img src={p1}/>

                                   </div>
                                 <div class="quick_icon">
                                   <img src={p2} />
                                   </div>
                              </div>
                              <div class="client_taital_right">
                                 <h4 class="client_name">Pizza__Me</h4>
                                 <p class="customer_text"><a href="https://github.com/2BWeru/Pizza_Me">Github</a></p>
                              </div>
                           </div>
                       </div>
                     </div>
                  </div>               
             </div>
            </div>
            <br />
            {/* row2 */}
            <div class="row">
               <div class="col-6">
                 <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="client_main">
                           <div class="box_left">
                              <p class="lorem_text">
                              An E-commerce website for Skincare products for both women and Men.
                              <a><mark>__SkinBlur__</mark></a>
                              <p><i>React, JavaScript, Material UI, Html&Css</i></p>   
                              </p>
                           </div>
                           <div class="box_right">
                              <div class="client_taital_left">
                                 <div class="client_img">
                                   <img src={p1}/>

                                   </div>
                                 <div class="quick_icon">
                                   <img src={p2} />
                                   </div>
                              </div>
                              <div class="client_taital_right">
                                 <h4 class="client_name">SkinBlur</h4>
                                 <p class="customer_text"><a href="https://github.com/2BWeru/Skin_blur">Github</a></p>
                              </div>
                           </div>
                     </div>
                     
                  </div>
               </div>
             </div>

             <div class="col-6">
                 <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="client_main">
                           <div class="box_left">
                              <p class="lorem_text">
                                 This website allows users to post quotes of their liking, delete them and view posted <a href="https://quotify-23.netlify.app/"><mark>Quotes</mark></a>.
                                 <p><i>JavaScript, Angular Js, Restful API, Html&Css,Bootstrap</i></p>
                              </p>
                           </div>
                           <div class="box_right">
                              <div class="client_taital_left">
                                 <div class="client_img">
                                   <img src={p1}/>

                                   </div>
                                 <div class="quick_icon">
                                   <img src={p2} />
                                   </div>
                              </div>
                              <div class="client_taital_right">
                                 <h4 class="client_name">Quotes</h4>
                                 <p class="customer_text"><a href="https://github.com/2BWeru/Quotes">Github</a></p>
                              </div>
                           </div>
                       </div>
                     </div>
                  </div>               
             </div>
            </div>
           </div>
         </div>
      </div>
      {/* <!-- client section start --> */}
    </>
  );
}

export default Projects;
