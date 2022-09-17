import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className = "portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      {/* Represents one section of the portfolio */}
      <div className = "container"> 
        <div className="item">
          <img src="assets/Last_Night_Was_A_Movie.png" alt="album-cover"></img>
          <h3>Last Night Was A Movie</h3>
        </div>

        <div className="item">
          <img src="assets/12amDeluxe.png" alt="album-cover"></img>
          <h3>12AM On Jane & Wilson Deluxe</h3>
        </div>

        <div className="item">
          <img src="assets/navy_album.png" alt="album-cover"></img>
          <h3>Navy</h3>
        </div>

        <div className="item">
          <img src="assets/triptobatangasrework.png" alt="album-cover"></img>
          <h3>Trip to Batangas</h3>
        </div>

        <div className="item">
          <img src="assets/Vibe.png" alt="album-cover"></img>
          <h3>No Dawgs Allowed</h3>
        </div>
      </div>

    </div>
  )
}
