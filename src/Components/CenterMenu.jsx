import React from 'react'

function CenterMenu() {
    const listStyle="mr-[3rem] hover:cursor-pointer"
  return (
   <>
    <div className="menu flex">
        <ul className='flex  w-[100%] justify-between'>
            <li className={listStyle}>About</li>
            <li className={listStyle}>Projects</li>
            <li className={listStyle} >Services</li>
            <li className={listStyle}>Contact</li>

        </ul>
    </div>
   </>
  )
}

export default CenterMenu;