import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const baseURL = "https://api.nasa.gov/planetary/apod?api_key=q8Tae8I9G0Bc4qusMpLSYcxbG3R0469sowolCtPF";

export default function LandingPage () {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return(
    <div className="landing-page">
      <div className="item-1">
        <h1>Astronomy Picture of the Day</h1>
        <nav>
          <Link to="/">Home</Link> 
          <Link to="archive">Archive</Link>
        </nav>
      </div>

      <div className="item-2">
        <div className="date">
          <h2>{data.date}</h2>
        </div>
        <div className="title">
          <h2>{data.title}</h2>
          <h3><span>Credits:</span> {data.copyright}</h3>
        </div>
        <div className="description">
          <p><span>Explanation:</span> {data.explanation}</p>
        </div>
      </div>

      <div className="item-3">
        <img src={data.hdurl} alt="APOD" />
      </div>
    </div>

    
  )
}