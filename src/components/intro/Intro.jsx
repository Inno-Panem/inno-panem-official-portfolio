import "./intro.scss"
import { ArrowDropDownCircleTwoTone } from "@material-ui/icons";



export default function Intro() {
  return (
    <div className = "intro" id = "intro">
      <div className="left">
        <div className="imgContainer">
            <img src="assets/IMG_5249.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className = "wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Inno Panem</h1>
          <h3>Computer Engineering Student<span></span></h3>
        </div>
        <a href="#portfolio">
          <ArrowDropDownCircleTwoTone/>
        </a>
      </div>
    
    </div>
  )
}
