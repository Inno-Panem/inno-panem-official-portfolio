import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
// Logo code:
// <img src="http://i.imgur.com/tZPp41C.png" className = "logo" alt="inno" width = "25" height = "25"></img>  



export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className = {"topbar " + (menuOpen && " active")}>
        <div className = "wrapper">
            <div className = "left">
                <a href = "#intro" className = "logo"> 
                  IP
                </a> 
                <div className = "itemContainer">
                  <Person className = "icon"/>
                  <span>+416 906 7910</span>
                </div>
                <div className = "itemContainer">
                  <Mail className = "icon"/>
                  <span>innopanem@gmail.com</span>
                </div>
            </div>
            <h1>Inno Panem</h1>
            <div className = "right">
              <div className = "hamburger" onClick = {()=>setMenuOpen(!menuOpen)}> 
                  <span className = "line1"></span>
                  <span className = "line2"></span>
                  <span className = "line3"></span>

              </div>
            </div>
        </div>
    </div>
  )
}
