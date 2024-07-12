import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { education } from "../constants";
import { sectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";

const EducationCard = ({education})=>(
  <VerticalTimelineElement>
      <div>
        <h3 className="text-[#2e8e57] text-[24px] font-bold">{education.title}</h3>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {education.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className="text-black-100 text-[14px] pl-1 tracking wider font-bold">
                {point}
              </li>
          ))}
        </ul>
      </div>
    
  </VerticalTimelineElement>
)
const Education = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    
        <h2 className={styles.sectionHeadText}>What we do.</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {education.map((education, index) =>(
          <EducationCard key={index}
          education={education}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default sectionWrapper(Education, "education")