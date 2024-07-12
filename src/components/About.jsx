import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from '../HOC';
const ServiceCard = ({ index, title, icon,points}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5 * index, 0.75)}
        className='w-full green-cyan-gradient p-[1px] rounded-[20px] shadow-card'>
            <div
              options={{
                max:45,
                scale: 1,
                speed: 450
              }}
              className='bg-gray-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title}
                className='w-16 h-16 object-contain'/> 
                <h3 className='text-black text-[20px] font-bold text-center'>{title}</h3>
                <p className="mt-2 text-black text-[14px] flex justify-evenly items-center flex-col">{points}</p>
              </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <p className={styles.sectionHeadText}>We Belive that we can Eradicate<span className="text-[#ea0c0c]"> Poverty</span> with you.</p>
    <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
        <motion.div 
  variants={textVariant()} 
  className="flex flex-row-reverse items-center space-x-4 space-x-reverse"
>
</motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-black text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        
      </motion.p>
       
    </>
  )
}
export default sectionWrapper(About, "about")