import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Project, Education, JustForFun, StarsCanvas} from './components';
const App = () =>{
    return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About/>
          <Project/>
          <Education/>
          <JustForFun/>
          
          {/* <TechStack/> */}
          
          
          
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
//add<Experience/>
export default App
