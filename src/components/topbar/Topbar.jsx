import "./topbar.scss";


export default function Topbar() {
  return (
    <div className = "topbar">
        <div className = "wrapper">
            <div className = "left">
                <a href = "#intro" className = "logo">
                  <img src="http://i.imgur.com/tZPp41C.png" className = "logo" alt="inno" width = "50" height = "50"></img>  
                </a>  
                <div className = "itemContainer">
                  
                </div>
            </div>
            <h1>Inno Panem</h1>
            <div className = "right">
              this is right
            </div>
        </div>
    </div>
  )
}
