import React, { useState } from 'react';

// icons
import { HiMenuAlt4, HiX } from 'react-icons/hi';

// animations
import { motion } from 'framer-motion';

// images
import { images } from '../../constants';

// styles
import './Navbar.scss';

const Navbar = () => {

  // creating a state
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>

      <ul className='app__navbar-links'> {/* unordered list */}
        {['home', 'work', 'skills', 'about', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}> {/* list item */}
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => 
          setToggle(true) // to open the menu
          }/>
          {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >

                <HiX onClick={() => setToggle(false)} />
                
                <ul className='app__navbar-links'> {/* unordered list */}
                  {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={item}> {/* list item */}
                      <a 
                        href={`#${item}`}
                        onClick={() => setToggle(false)} // so we close the navbar
                      >{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar