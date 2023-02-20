/* eslint-disable react/jsx-no-undef */
import React from "react";
import CenterMenu from "./CenterMenu";
import "./Header.css"

function Header() {
    return(
     <>
      {/* <!-- header section start --> */}
       <div className="Header bg-[#111] flex 
            items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]
            shrink md:shrink-0 shrink sm:shrink-0
            ">
            <div className="header-name">
            <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Betty Wamaitha&nbsp;</span>
                <span class="hover-text" aria-hidden="true">&nbsp;BettyWamaitha&nbsp;</span>
            </button>
            </div>
            {/* navbar */}
            <CenterMenu/>
            {/* buttons */}
            <div className="buttons flex">
              <label class="label">
                  <div class="toggle">
                      <input class="toggle-state" type="checkbox" name="check" value="check" />
                      <div class="indicator"></div>
                  </div>
              </label>  
            </div>
       </div>
     </>
    )
}

export default Header;