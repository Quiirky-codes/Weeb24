import { BallCanvas } from "./canvas";
import { sectionWrapper } from "../HOC";
import { technologies } from "../constants";
import { styles } from '../styles';
import { textVariant } from "../utils/motion";

const TechStack = () => {
  return(
    
    <div className="flex flex-row flex-wrap justify-center gap-10">

      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>

        </div>
      ))}
    </div>
  )
}

export default sectionWrapper(TechStack, "");