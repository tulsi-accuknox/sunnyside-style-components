import React from 'react'
import '../Header/Header.css'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div>
        <section className='header'>
          <nav>
            <motion.h2 initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}}>sunnyside</motion.h2>
            <motion.ul initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}}>
             <motion.li whileHover={{scale:1.3}}>About</motion.li>
             <motion.li whileHover={{scale:1.3}}>Services</motion.li>
             <motion.li whileHover={{scale:1.3}}>Projects</motion.li>
             <motion.li whileHover={{scale:1.3}}>Contact</motion.li>
            </motion.ul>
          </nav>

          <h1 className='header_head'>WE ARE CREATIVES</h1>
          <motion.img initial={{y:-1000,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1}} classname="img-arrow" src="/images/down-arrow.png" alt=""/>

        </section>
    </div>
  )
}

export default Header