import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, image }) => {
  return(
    <motion.div variance={fadeIn("up","spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-gray-100 p-5 rounded-2x1 sm:w-[360px] w-full rounded-[20px]">
          <div className="relative w-full h-[230px]">
            <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"/>
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* <div
              onClick={() => window.open
                (source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img
                    src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"/>
                </div> */}
                
          </div>
          {/* <div className="mt-5">
            <h3 className="text-white text-[18px] font-bold">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div> */}
        </Tilt>
    </motion.div>
  )
}
const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
    <h2 className={styles.sectionHeadText}>Who we are</h2>
    </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("","",0.1,1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
            >
              A non-profit and non-Governmental Organization founded in 2024 to promote sustainable agriculture, 
              improve nutrition, end world hunger and achieve food security. We commit ourselves to helping families 
              in the poor communities, the marginalized and underprivileged to improve their lives and achieve lasting 
            victory against poverty.
            </motion.p>

        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) =>(
            <ProjectCard key={`project-${index}`}
            index={index}
            {...project}/>
          ))}
        </div>
    </>
  )
}

export default sectionWrapper(Project,"project");