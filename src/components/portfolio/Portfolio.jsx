import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import { featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio} from "../../data";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

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

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
          setData(webPortfolio);
          break;
        case "mobile":
          setData(mobilePortfolio);
          break;
        case "design":
          setData(designPortfolio);
          break;
        case "content":
          setData(contentPortfolio);
          break;
        default:
          setData(featuredPortfolio);
          
  
    }

  },[selected])

  return (
    <div className = "portfolio" id="portfolio">
      <h1>Portfolio.</h1>
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
          {data.map(d=>(
            <div className="item">
              <img 
              // src = {d.img}
              src="assets/Last_Night_Was_A_Movie.png" 
              alt="album-cover"
              />
              {/* {d.title} */}
              <h3>Last Night Was A Movie</h3> 
            </div>
          ))}
      </div>
    </div>
  )
}
