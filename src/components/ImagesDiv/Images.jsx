import React from 'react'
import './Images.css'
import {motion} from 'framer-motion'

const Images = () => {
  return (
    <div>
        <section className="grid grid-cols-4">
          <motion.div whileHover={{scale:1.1}} classname="w-full"><img className="w-full" src="/images/image-gallery-milkbottles.jpg" alt="" /></motion.div>
          <motion.div whileHover={{scale:1.1}} classname="w-full"><img className="w-full" src="/images/image-gallery-orange.jpg" alt="" /></motion.div>
          <motion.div whileHover={{scale:1.1}} classname="w-full"><img className="w-full" src="/images/image-gallery-cone.jpg" alt="" /></motion.div>
          <motion.div whileHover={{scale:1.1}} classname="w-full"><img className="w-full" src="/images/image-gallery-sugarcubes.jpg" alt="" /></motion.div>
        </section>

        <section className='footer'>
            <h2 className="text-4xl font-bold text-green-800">sunnyside</h2>
            <ul className="flex justify-center items-center gap-8 text-green-800 cursor-pointer">
                <motion.li whileHover={{scale:1.1}}>About</motion.li>
                <motion.li whileHover={{scale:1.1}}>Services</motion.li>
                <motion.li whileHover={{scale:1.1}}>Projects</motion.li>
            </ul>
            <ul className="flex justify-center items-center gap-8 text-green-800 text-2xl cursor-pointer">
                <li><i class='bx bxl-facebook-square' ></i></li>
                <li><i class='bx bxl-instagram' ></i></li>
                <li><i class='bx bxl-twitter' ></i></li>
                <li><i class='bx bxl-pinterest' ></i></li>
            </ul>
        </section>
    </div>
  )
}

export default Images