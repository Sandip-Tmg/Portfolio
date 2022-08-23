import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const handleClick = () => setToggleNav(!toggleNav);

  return (
    <div className='fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* Logo*/}
        <div>
          <h1>Sandip</h1>
        </div>

        {/* menu*/}
        <div>
          <ul className='hidden md:flex'>  {/* display when above 760px else display none*/}
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* hamburger menu*/}
        <div onClick={handleClick} className='md:hidden cursor-pointer z-10'> {/*hide when it is above medium i.e 760px else display block*/}
          {toggleNav? <FaTimes/>:<FaBars/>}
        </div>

        {/* mobile menus*/}
        <ul className={toggleNav? 'absolute top-0 left-0 w-full h-[100vh] bg-[#0a192f] flex flex-col justify-center items-center':'hidden'}>
          <li className='py-6 text-5xl'>Home</li>
          <li className='py-6 text-5xl'>About</li>
          <li className='py-6 text-5xl'>Skills</li>
          <li className='py-6 text-5xl'>Contact</li>
        </ul>
    </div>
  )
}
