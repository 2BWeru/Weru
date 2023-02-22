import React from "react";
import "./contact.css";
import {MdEmail} from "react-icons/md";
import {BiPhoneCall} from "react-icons/bi"

// BsLinkedin


function contact() {
   const date = new Date();
   
  return (
    <>
      {/* <!-- choose section start --> */}
      <div class="choose_section layout_padding">
         <div class="container">
            <div>
            <h1 class="choose_taital">Are You Interested ?</h1>
            <p class="choose_text">Whether you have an interesting project or just want to say hi,<br /> feel free to send me a message.</p>
            <div class="read_bt_1"><a href="#">Message Me </a></div>
            <br />
            <br />
            <br />

            </div>
            <div className="contact-icon">
            <div class="row">
                  <div class="col-6">
                  <div className="con">
                     <BiPhoneCall className="icon-con"/>
                     <br />
                     <p>+254113327116</p>
                  </div>
                  </div>
                  <div class="col-6">
                  <div className="con">
                     <MdEmail className="icon-con" />
                     <br />
                     <br />
                     <a href="mailto:wamaithaweru19@gmail.com"><p>wamaithaweru19@gmail.com</p></a>
                  </div>
                  </div>
               </div>
            </div>
            {/* <div class="newsletter_box">
               <h1 class="let_text">Let's Work Together</h1>
               <div class="getquote_bt"><a href="#">Get In Touch </a></div>
            </div> */}
         </div>
      </div>
      {/* <!-- choose section end --> */}
      
      {/* <!-- copyright section start --> */}
      <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
         </div>
      </div>
    </>
  );
}

export default contact;
