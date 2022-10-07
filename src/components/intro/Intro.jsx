import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,  // waits once all letters are shown
      backSpeed: 60,
      showCursor: true,
      strings: ["Computer", "Embedded Systems", "Software"],
    });
  }, [])

  return (
    <div className = "intro" id = "intro">
      <div className="left">
        <div className="imgContainer">
            <img src="assets/IMG_5625.png" alt="Inno Panem"/>
        </div>
      </div>
      <div className="right">
        <div className = "wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Inno Panem.</h1>
          <h3>Aspiring <span ref={textRef}></span> Engineer</h3>
        </div>
        <a href="#about" id = "intro-arrow">
          {/* uses main color for arrow drop down*/}
          <KeyboardArrowDown style={{ color: '#151D3B' }} />


        </a>
      </div>
    
    </div>
  )
}
