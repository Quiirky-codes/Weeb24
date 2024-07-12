import { motion } from "framer-motion";
import { styles } from '../styles';
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import { Tilt } from "react-tilt";

const JustForFunCard = ({ index, testimonial, title }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-200 p-5 rounded-2xl sm:w-[360px] w-full green-cyan-gradient-border"
      >
        <div className="mt-5">
          <h3 className="text-[#2E8E57] text-[18px] font-bold">{title}</h3>
          <p className="mt-2 text-black text-[14px]">{testimonial}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const JustForFun = () => {
  return (
    <div className="mt-12 bg-gray-300 rounded-[20px]">
      <div className={`${styles.padding} bg-gray-400 rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-[#2E8E57]`}>Blog.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
  <JustForFunCard
    key={testimonial.id} 
    index={index}
    {...testimonial}
  />
))}
      </div>
    </div>
  );
};

export default sectionWrapper(JustForFun, "");
